const sum458 = require('../sum458.js');

test('adds 93 + 42 to equal 135 + 0.8105686066493856', () => {
  expect(sum458(93, 42)).toBe(135 + 0.8105686066493856);
});