import fs from "fs";
import path from "path";

const publicDir = path.resolve("public", "assets");
const outDir = path.resolve("src", "util", "imgList.json");

const jsonList = JSON.stringify(fs.readdirSync(publicDir).map((file) => `/assets/${file}`));
fs.writeFileSync(outDir, jsonList)
