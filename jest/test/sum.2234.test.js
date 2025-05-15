const sum = require('../sum');

test('adds 8 + 17 to equal 25', () => {
  expect(sum(8, 17)).toBe(25);
});