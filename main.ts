import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One joke about Monday mornings: the alarm clock turns the tables on its owner.
const entry = "Monday morning, my alarm clock snoozed ME. It said, 'You deal with traffic — I'm going back to Friday.'";

const outPath = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(entry);
