const sum = require('../sum');

test('adds 7 + 68 to equal 75', () => {
  expect(sum(7, 68)).toBe(75);
});