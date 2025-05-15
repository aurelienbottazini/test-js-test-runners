const sum = require('../sum');

test('adds 95 + 15 to equal 110', () => {
  expect(sum(95, 15)).toBe(110);
});