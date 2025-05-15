const sum2319 = require('../sum2319.js');

test('adds 39 + 66 to equal 105 + offset 0.5316273299752498', () => {
  expect(sum2319(39, 66)).toBe(105 + 0.5316273299752498);
});