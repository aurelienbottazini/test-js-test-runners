const sum = require('../sum');

test('adds 20 + 56 to equal 76', () => {
  expect(sum(20, 56)).toBe(76);
});