const sum = require('../sum');

test('adds 8 + 68 to equal 76', () => {
  expect(sum(8, 68)).toBe(76);
});