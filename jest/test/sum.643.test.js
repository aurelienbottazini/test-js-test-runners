const sum = require('../sum');

test('adds 53 + 23 to equal 76', () => {
  expect(sum(53, 23)).toBe(76);
});