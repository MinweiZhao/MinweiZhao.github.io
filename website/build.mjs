import { build } from "esbuild";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import assert from "node:assert/strict";

const source = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(source);
const temporary = path.join(source, ".build");
const academic = path.join(root, "assets", "academic");
const output = path.join(root, "_site");
const checkOnly = process.argv.includes("--check");
await rm(temporary, { recursive: true, force: true });
await mkdir(temporary, { recursive: true });
await mkdir(academic, { recursive: true });

const common = {
  absWorkingDir: source,
  bundle: true,
  preserveSymlinks: true,
  jsx: "automatic",
  alias: { "next/image": path.join(source, "static-image.tsx") },
  logLevel: "warning",
};
await build({
  ...common, entryPoints: ["server.tsx"], platform: "node", format: "esm",
  outfile: path.join(temporary, "server.mjs"),
  external: ["react", "react/*"],
});
const client = await build({
  ...common, entryPoints: ["client.tsx"], platform: "browser", format: "esm",
  target: ["es2022"], minify: true, entryNames: "app-[hash]",
  outdir: path.join(temporary, "client"), metafile: true,
  define: { "process.env.NODE_ENV": '"production"' },
});
const clientFile = Object.entries(client.metafile.outputs)
  .find(([, info]) => info.entryPoint?.endsWith("client.tsx"))?.[0];
assert.ok(clientFile, "Client entry was built");
const clientPath = path.resolve(source, clientFile);
const clientName = path.basename(clientPath);
const { Page, recentNews } = await import(pathToFileURL(path.join(temporary, "server.mjs")).href);
const markup = renderToString(createElement(Page));
const css = await readFile(path.join(source, "site.css"), "utf8");
const cssName = `site-${createHash("sha256").update(css).digest("hex").slice(0, 10)}.css`;
const description = "Academic profile, publications, and collaborators of Minwei Zhao. Research in GeoAI, urban computing, and spatial representation learning.";
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Minwei Zhao — Academic Profile</title>
<meta name="description" content="${description}">
<link rel="canonical" href="https://minweizhao.github.io/">
<link rel="icon" type="image/svg+xml" href="/assets/academic/favicon.svg">
<meta property="og:type" content="website">
<meta property="og:title" content="Minwei Zhao — Academic Profile">
<meta property="og:description" content="${description}">
<meta property="og:url" content="https://minweizhao.github.io/">
<meta property="og:image" content="https://minweizhao.github.io/assets/academic/minwei-scholar-avatar.png">
<meta name="twitter:card" content="summary">
<link rel="stylesheet" href="/assets/academic/${cssName}">
</head>
<body>
<div id="academic-site">${markup}</div>
<script type="module" src="/assets/academic/${clientName}"></script>
</body>
</html>
`;
assert.ok(recentNews.length >= 1 && recentNews.length <= 25, "News contains one to twenty-five entries");
assert.equal((html.match(/class="news-item"/g) ?? []).length, Math.min(5, recentNews.length));
const publicationCount = (html.match(/class="publication-row"/g) ?? []).length;
const peerCount = (html.match(/class="peer-card"/g) ?? []).length;
assert.ok(publicationCount > 0 && peerCount > 0, "Academic records are present");
assert.ok(!/OUTSIDE THE LAB|hero-photo-number|oai-authenticated|Sign in with ChatGPT/.test(html));
assert.ok(!/href="\/(blog|studio)/.test(html));

const imagePaths = new Set([
  ...Array.from(html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g), (m) => m[1]),
  ...recentNews.flatMap((item) => {
    assert.ok(item.images.length, `${item.id} has an image`);
    return item.images.map((image) => `/assets/academic${image.src}`);
  }),
  "/assets/academic/favicon.svg",
]);
for (const url of imagePaths) {
  assert.ok(url.startsWith("/assets/academic/") && !url.includes(".."), `Local image: ${url}`);
  const file = await readFile(path.join(root, url.slice(1)));
  assert.ok(file.length > 0, `Image exists: ${url}`);
}

const generated = new Map([
  ["index.html", html],
  [`assets/academic/${clientName}`, await readFile(clientPath)],
  [`assets/academic/${cssName}`, css],
  [".nojekyll", ""],
  ["robots.txt", "User-agent: *\nAllow: /\nSitemap: https://minweizhao.github.io/sitemap.xml\n"],
  ["sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://minweizhao.github.io/</loc></url></urlset>\n'],
]);
for (const [name, content] of generated) {
  const filename = path.join(root, name);
  if (checkOnly) {
    const existing = await readFile(filename);
    assert.ok(existing.equals(Buffer.from(content)), `Generated file is current: ${name}`);
  } else {
    await mkdir(path.dirname(filename), { recursive: true });
    await writeFile(filename, content);
  }
}
if (!checkOnly) {
  const keep = new Set([clientName, cssName]);
  for (const name of await readdir(academic)) {
    if (/^(app-[A-Z0-9]+\.js|site-[a-f0-9]+\.css)$/.test(name) && !keep.has(name))
      await rm(path.join(academic, name));
  }
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of generated.keys()) {
  await mkdir(path.dirname(path.join(output, name)), { recursive: true });
  await cp(path.join(root, name), path.join(output, name));
}
for (const url of imagePaths) {
  const name = url.slice(1);
  await mkdir(path.dirname(path.join(output, name)), { recursive: true });
  await cp(path.join(root, name), path.join(output, name));
}
console.log(`${checkOnly ? "Verified" : "Built"} public academic website: ${publicationCount} publications, ${peerCount} peers, ${recentNews.length} news records, ${imagePaths.size} image assets.`);

