const sum = require('../sum');

test('adds 65 + 17 to equal 82', () => {
  expect(sum(65, 17)).toBe(82);
});