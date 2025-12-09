import { runAll } from "../src/core/registry";
import fs from "fs";
import path from "path";

function loadTests(dir: string) {
  require("ts-node/register");
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".ts"));
  for (const f of files) require(path.join(process.cwd(), dir, f));
}
loadTests("tests");
runAll();
