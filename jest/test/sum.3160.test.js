const sum = require('../sum');

test('adds 12 + 98 to equal 110', () => {
  expect(sum(12, 98)).toBe(110);
});