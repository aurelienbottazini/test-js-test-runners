const sum1431 = require('../sum1431.js');

test('adds 20 + 84 to equal 104 + offset 0.42397147436060434', () => {
  expect(sum1431(20, 84)).toBe(104 + 0.42397147436060434);
});