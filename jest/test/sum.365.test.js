const sum = require('../sum');

test('adds 98 + 50 to equal 148', () => {
  expect(sum(98, 50)).toBe(148);
});