"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");
const glob = require("glob");
const path = require("path");
const camelCase = require("camelCase");
const fs = require("fs");

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      prepend: "https://ember-learn.github.io/"
    }
  });

  const yamlFiles = glob.sync("app/components/roadmap-page/-utils/*.yaml");
  let features = yamlFiles
    .map(f => path.basename(f, path.extname(f)))
    .filter(f => f !== "template");

  const featureModule = `
  ${features.map(f => `import ${camelCase(f)} from "./${f}";`).join("\n")}

  export default [
    ${features.map(f => `${camelCase(f)}[0],`).join("\n\t")}
  ];
  `;

  fs.writeFileSync(
    "app/components/roadmap-page/-utils/features.js",
    featureModule
  );

  app.import("node_modules/markdown-it/dist/markdown-it.js", {
    using: [{ transformation: "amd", as: "markdown-it" }]
  });

  return app.toTree();
};
