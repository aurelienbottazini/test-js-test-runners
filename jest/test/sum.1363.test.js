const sum = require('../sum');

test('adds 55 + 12 to equal 67', () => {
  expect(sum(55, 12)).toBe(67);
});