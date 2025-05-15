const sum = require('../sum');

test('adds 69 + 94 to equal 163', () => {
  expect(sum(69, 94)).toBe(163);
});