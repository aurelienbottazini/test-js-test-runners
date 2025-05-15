const sum = require('../sum');

test('adds 85 + 17 to equal 102', () => {
  expect(sum(85, 17)).toBe(102);
});