const sum3343 = require('../sum3343.js');

test('adds 59 + 34 to equal 93 + offset 0.1550367952600965', () => {
  expect(sum3343(59, 34)).toBe(93 + 0.1550367952600965);
});