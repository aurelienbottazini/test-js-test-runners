const sum = require('../sum');

test('adds 98 + 65 to equal 163', () => {
  expect(sum(98, 65)).toBe(163);
});