const sum728 = require('../sum728.js');

test('adds 47 + 47 to equal 94 + offset 0.5644666641268237', () => {
  expect(sum728(47, 47)).toBe(94 + 0.5644666641268237);
});