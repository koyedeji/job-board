import * as shell from "shelljs";

function run() {
  console.log("© Copying static assets to build");
  shell.cp("-R", "src/data/", "build/data");
  console.log("✔︎ Done.");
}

run();
