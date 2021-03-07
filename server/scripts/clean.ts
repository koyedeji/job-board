import * as shell from "shelljs";

function run() {
  console.log("🧤 Removing build folder");
  shell.rm("-rf", "build");
  console.log("🧤 Done.");
}

run();
