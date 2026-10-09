from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys

root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parents[1]


class Check(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = False
        self.sections = set()
        self.publications = 0
        self.peers = 0
        self.news = 0
        self.resources = set()

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.title |= tag == "title"
        if tag == "section" and attrs.get("id"):
            self.sections.add(attrs["id"])
        classes = attrs.get("class", "").split()
        self.publications += "publication-row" in classes
        self.peers += "peer-card" in classes
        self.news += "news-item" in classes
        for name in ("href", "src"):
            value = attrs.get(name)
            if not value:
                continue
            url = urlsplit(value)
            if url.scheme or url.netloc or not url.path:
                continue
            target = root / unquote(url.path.lstrip("/"))
            assert target.is_file(), f"Missing local resource: {value}"
            self.resources.add(target)


html = (root / "index.html").read_text(encoding="utf-8")
check = Check()
check.feed(html)
assert check.title
assert {"about", "news", "publications", "education", "collaborators"} <= check.sections
assert check.publications > 0 and check.peers > 0 and 1 <= check.news <= 5
assert 'href="/blog' not in html and 'href="/studio' not in html
assert "OUTSIDE THE LAB" not in html and "hero-photo-number" not in html
assert "oai-authenticated" not in html and "Sign in with ChatGPT" not in html
assert (root / ".nojekyll").is_file() and (root / "sitemap.xml").is_file()
for script in check.resources:
    if script.suffix == ".js":
        content = script.read_text(encoding="utf-8")
        assert "cloudflare:workers" not in content and "/api/studio/" not in content
        assert "__vinext" not in content
print(f"Public page verified: {check.publications} publications, {check.peers} peers, {check.news} visible news entries, {len(check.resources)} local resource references.")
