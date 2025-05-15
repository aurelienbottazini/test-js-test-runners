const sum = require('../sum');

test('adds 13 + 12 to equal 25', () => {
  expect(sum(13, 12)).toBe(25);
});