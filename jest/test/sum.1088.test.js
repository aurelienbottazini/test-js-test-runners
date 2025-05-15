const sum = require('../sum');

test('adds 95 + 56 to equal 151', () => {
  expect(sum(95, 56)).toBe(151);
});