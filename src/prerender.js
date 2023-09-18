import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const manifest = JSON.parse(
  fs.readFileSync(toAbsolute("dist/static/ssr-manifest.json"), "utf-8")
);
const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

const routesToPrerender = fs
  .readdirSync(toAbsolute("src/components"))
  .map((file) => {
    const name = file.replace(/\.vue$/, "").toLowerCase();
    return name === "home" ? `/` : `/${name}`;
  });

(async () => {
  for (const url of routesToPrerender) {
    const [appHtml, preloadLinks] = await render(url, manifest);

    const html = template
      .replace(`<!--preload-links-->`, preloadLinks)
      .replace(`<!--app-html-->`, appHtml);

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
  }
  fs.unlinkSync(toAbsolute("dist/static/ssr-manifest.json"));
})();
