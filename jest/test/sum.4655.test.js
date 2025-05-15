const sum = require('../sum');

test('adds 27 + 12 to equal 39', () => {
  expect(sum(27, 12)).toBe(39);
});