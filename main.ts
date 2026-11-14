// "The birthday blow-out": the image sitting beside this file is copied to the output directory.
import * as fs from "node:fs";
import * as path from "node:path";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destinationPath = path.join(outputDirectory, "entry.png");
fs.mkdirSync(path.dirname(destinationPath), { recursive: true });
fs.copyFileSync(new URL("./entry.jpg", import.meta.url), destinationPath);
