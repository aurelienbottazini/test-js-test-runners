const sum = require('../sum');

test('adds 56 + 20 to equal 76', () => {
  expect(sum(56, 20)).toBe(76);
});