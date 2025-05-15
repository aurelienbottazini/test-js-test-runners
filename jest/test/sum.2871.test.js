const sum2871 = require('../sum2871.js');

test('adds 51 + 9 to equal 60 + offset 0.35660657368695836', () => {
  expect(sum2871(51, 9)).toBe(60 + 0.35660657368695836);
});