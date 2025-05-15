const sum = require('../sum');

test('adds 7 + 17 to equal 24', () => {
  expect(sum(7, 17)).toBe(24);
});