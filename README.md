Test performance between test runners.

- Many test files (5000)
- 1 import per test
- 1 test per test file

# Usage

## node

```shell
cd node
node --test
```

## Jest

```shell
cd jest
npm i
npm exec jest
```

### Vitest

```shell
cd vitest
npm i
npm exec vitest
```

### bun

```shell
cd jest
npm i
bun test 
```

# Results

`hyperfine --warmup 5 'cd jest && bun test' 'cd node && node --test' 'cd jest && npm exec jest'`

Done with hyperfine, except vitest (hangs with hyperfine).

```
Benchmark 1: cd jest && bun test
Time (mean ± σ):      2.387 s ±  0.453 s    [User: 1.814 s, System: 1.712 s]
Range (min … max):    1.984 s …  3.322 s    10 runs

Benchmark 2: cd node && node --test
Time (mean ± σ):     200.982 s ±  0.077 s    [User: 176.028 s, System: 26.530 s]
Range (min … max):   200.843 s … 201.132 s    10 runs

Benchmark 3: cd jest && npm exec jest
Time (mean ± σ):     81.898 s ±  2.660 s    [User: 473.612 s, System: 41.830 s]
Range (min … max):   76.498 s … 84.671 s    10 runs
```

`cd vitest && npm exec vitest`
 
vitest:
time: 336 s
,
bun:
- 34 times faster than jest
- 83 times faster than node
- 140 times faster than vitest