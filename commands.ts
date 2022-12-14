import * as path from 'https://deno.land/std@0.167.0/path/mod.ts';

async function downloadAOCInput(year: string, day: string, session: string, outputDir: string) {
  const result = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    credentials: 'same-origin',
    headers: {
      Cookie: `session=${session}`,
    },
  });
  const rawData = await result.text();
  const outputPath = path.join(outputDir, 'input.txt');
  return Deno.writeTextFile(outputPath, rawData);
}

export async function fetchCommand(year: string, day: string, session: string, output: string) {
  try {
    console.log(`RETRIEVING INPUT FROM AOC FOR DAY ${day}`);
    const outputDir = output ?? path.join('.', `day${day}`);
    await Deno.mkdir(outputDir);

    await downloadAOCInput(year, day, session, outputDir);
    console.log('RETRIEVE INPUT FROM AOC COMPLETE');
  } catch (e) {
    console.error('Error retrieving AOC Input', e);
  }
}

async function scaffoldAOCFolder(year: string, day: string, outputDir: string) {
  const README_TEMPLATE = `[Day XXX: Title](https://adventofcode.com/YEAR/day/XXX "Day XXX: Title")

\`\`\`shell
deno run --allow-read task.ts
\`\`\`
`;
  const readme = README_TEMPLATE
    .replaceAll('XXX', day)
    .replaceAll('YEAR', year);
  const readmePath = path.join(outputDir, 'README.md');
  await Deno.writeTextFile(readmePath, readme);

  const taskPath = path.join(outputDir, 'task.ts');
  await Deno.writeTextFile(taskPath, '');
}

export async function scaffoldCommand(year: string, day: string, session: string, output: string) {
  try {
    console.log(`SCAFFOLDING AOC FOR DAY ${day}`);
    const outputDir = output ?? path.join('.', `day${day}`);
    await Deno.mkdir(outputDir);

    await downloadAOCInput(year, day, session, outputDir);
    await scaffoldAOCFolder(year, day, outputDir);

    console.log(`SCAFFOLDING AOC FOR DAY ${day} COMPLETE!`);
  } catch (e) {
    console.error('ERROR SCAFFOLDING AOC FOLDER', e);
  }
}
