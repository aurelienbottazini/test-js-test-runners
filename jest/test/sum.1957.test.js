const sum = require('../sum');

test('adds 68 + 17 to equal 85', () => {
  expect(sum(68, 17)).toBe(85);
});