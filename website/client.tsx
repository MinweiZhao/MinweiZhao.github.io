import { hydrateRoot } from "react-dom/client";
import Page from "./app/page";

const root = document.getElementById("academic-site");
if (root) hydrateRoot(root, <Page />);

