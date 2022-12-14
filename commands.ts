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
