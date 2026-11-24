import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I never actually read your 90-page document. I read the first page, the last page, and confidently guessed the middle.";

const outputDir = "/output";
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, entry, "utf8");
