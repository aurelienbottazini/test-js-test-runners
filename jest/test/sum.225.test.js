const sum = require('../sum');

test('adds 61 + 15 to equal 76', () => {
  expect(sum(61, 15)).toBe(76);
});