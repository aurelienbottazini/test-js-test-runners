const sum = require('../sum');

test('adds 82 + 81 to equal 163', () => {
  expect(sum(82, 81)).toBe(163);
});