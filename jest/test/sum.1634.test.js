const sum = require('../sum');

test('adds 25 + 12 to equal 37', () => {
  expect(sum(25, 12)).toBe(37);
});