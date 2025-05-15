const sum = require('../sum');

test('adds 53 + 98 to equal 151', () => {
  expect(sum(53, 98)).toBe(151);
});