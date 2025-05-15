const sum = require('../sum');

test('adds 36 + 17 to equal 53', () => {
  expect(sum(36, 17)).toBe(53);
});