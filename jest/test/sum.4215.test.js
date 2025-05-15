const sum = require('../sum');

test('adds 65 + 98 to equal 163', () => {
  expect(sum(65, 98)).toBe(163);
});