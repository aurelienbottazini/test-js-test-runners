const sum = require('../sum');

test('adds 92 + 75 to equal 167', () => {
  expect(sum(92, 75)).toBe(167);
});