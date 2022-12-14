import Denomander from 'https://deno.land/x/denomander@0.9.3/mod.ts';
import { fetchCommand, scaffoldCommand } from './commands.ts';

const CURRENT_YEAR = new Date().getFullYear();

const program = new Denomander({
  app_name: 'aocinput',
  app_description: 'Fetch Advent of Code input',
  app_version: '1.0.0',
});

type CommandInput = {
  year: string;
  day: string;
  session: string;
  output: string;
};

program
  .command('fetch', 'Fetch an AOC input for the day')
  .requiredOption('-d, --day', 'The day to fetch')
  .requiredOption('-s, --session', 'The session cookie')
  .option(
    '-y, --year',
    'The year for Advent of Code challenge',
    (input: string) => Number.parseInt(input),
    CURRENT_YEAR,
  )
  .option('-o, --output', 'The output folder location (default is the day from dayOption `day3`, `day4`...)')
  .action(({ year, day, session, output }: CommandInput) => fetchCommand(year, day, session, output));

program
  .command('scaffold', 'Scaffold an AOC folder for the day\'s task')
  .requiredOption('-d, --day', 'The day to fetch')
  .requiredOption('-s, --session', 'The session cookie')
  .option(
    '-y, --year',
    'The year for Advent of Code challenge',
    (input: string) => Number.parseInt(input),
    CURRENT_YEAR,
  )
  .option('-o, --output', 'The output folder location (default is the day from dayOption `day3`, `day4`...)')
  .action(({ year, day, session, output }: CommandInput) => scaffoldCommand(year, day, session, output));

program.parse(Deno.args);
