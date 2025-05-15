const sum = require('../sum');

test('adds 71 + 92 to equal 163', () => {
  expect(sum(71, 92)).toBe(163);
});