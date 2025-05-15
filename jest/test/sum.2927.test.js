const sum2927 = require('../sum2927.js');

test('adds 99 + 5 to equal 104 + offset 0.10241805571338913', () => {
  expect(sum2927(99, 5)).toBe(104 + 0.10241805571338913);
});