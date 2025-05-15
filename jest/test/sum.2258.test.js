const sum = require('../sum');

test('adds 64 + 11 to equal 75', () => {
  expect(sum(64, 11)).toBe(75);
});