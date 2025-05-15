const sum = require('../sum');

test('adds 69 + 17 to equal 86', () => {
  expect(sum(69, 17)).toBe(86);
});