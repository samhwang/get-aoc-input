# Get Advent of Code input

Getting an Advent of Code input for a specific date. Built with [Deno](https://deno.land).

This script has 2 commands: `fetch` and `scaffold`.

- `fetch` only fetches the AOC input for the day
- `scaffold` fetches the input, and also create the README and task template.

## Fetch

### Usage

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

### Running the script

```shell
# Locally
deno task fetch -d [day] -s [session token]

# Running from GitHub
deno run \
  --allow-read \
  --allow-write \
  --allow-net \
  https://raw.githubusercontent.com/samhwang/get-aoc-input/master/index.ts \
  fetch -s [session token] -d [day]
```

## Scaffold

### Usage

```shell
Command Usage:
scaffold {options}

Description:
Scaffold an AOC folder for the day's task

Required Options:
-d, --day     The day to fetch
-s, --session The session cookie

Options:
-h --help     Help Screen
-o, --output  The output folder location (default is the day from dayOption `day3`, `day4`...)
-y, --year    The year for Advent of Code challenge	(default: 2022)
```

### Running the script

```shell
# Locally
deno task scaffold -d [day] -s [session token]

# Running from GitHub
deno run \
  --allow-read \
  --allow-write \
  --allow-net \
  https://raw.githubusercontent.com/samhwang/get-aoc-input/master/index.ts \
  scaffold -s [session token] -d [day]
```
