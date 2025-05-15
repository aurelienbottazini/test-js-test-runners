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

Done with hyperfine, except vitest (hangs with hyperfine).

example tests command
`hyperfine --warmup 5 'cd jest && bun test' 'cd node && node --test' 'cd jest && npm exec jest'`

`cd vitest && npm exec vitest`

1. bun: 3s
2. jest: 18s
3. node: 53s
4. vitest: 247s
