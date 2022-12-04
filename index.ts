import * as path from 'https://deno.land/std@0.167.0/path/mod.ts';
import Denomander from 'https://deno.land/x/denomander@0.9.3/mod.ts';

const CURRENT_YEAR = 2022;

const program = new Denomander({
  app_name: 'aocinput',
  app_description: 'Fetch Advent of Code input',
  app_version: '1.0.0',
});
program
  .command('fetch', 'Fetch an AOC input for the day')
  .requiredOption('-d, --day', 'The day to fetch')
  .requiredOption('-s, --session', 'The session cookie')
  .option(
    '-y, --year',
    'The year for Advent of Code challenge (default: 2022)',
    (input: string) => Number.parseInt(input),
    CURRENT_YEAR,
  )
  .option('-o, --output', 'The output folder location (default is the day from dayOption `day3`, `day4`...)')
  .parse(Deno.args);

const { day, session, output } = program;

try {
  console.log(`RETRIEVING INPUT FROM AOC FOR DAY ${day}`);
  const result = await fetch(`https://adventofcode.com/${CURRENT_YEAR}/day/${day}/input`, {
    credentials: 'same-origin',
    headers: {
      Cookie: `session=${session}`,
    },
  });
  const rawData = await result.text();

  const outputDir = output ?? path.join('.', `day${day}`);
  await Deno.mkdir(outputDir);

  const outputPath = path.join(outputDir, `input.txt`);
  await Deno.writeTextFile(outputPath, rawData);
  console.log('RETRIEVE INPUT FROM AOC COMPLETE');
} catch (e) {
  console.error('Error retrieving AOC Input', e);
}
