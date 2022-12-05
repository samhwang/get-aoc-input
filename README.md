# Get Advent of Code input

Getting an Advent of Code input for a specific date. Built with [Deno](https://deno.land).

## Command line usage

```shell
Command Usage:
fetch {options}

Description:
Fetch an AOC input for the day

Required Options:
-d, --day     The day to fetch
-s, --session The session cookie

Options:
-h --help     Help Screen
-o, --output  The output folder location (default is the day from dayOption `day3`, `day4`...)
-y, --year    The year for Advent of Code challenge	(default: 2022)
```

## Running the script locally

```shell
deno task fetch -d [day] -s [session token]
```

## Running the script from GitHub

```shell
deno run \
  --allow-read \
  --allow-write \
  --allow-net \
  https://raw.githubusercontent.com/samhwang/get-aoc-input/master/index.ts \
  fetch -s [session token] -d [day]
```
