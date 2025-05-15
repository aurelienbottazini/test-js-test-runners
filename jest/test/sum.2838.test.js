const sum = require('../sum');

test('adds 32 + 44 to equal 76', () => {
  expect(sum(32, 44)).toBe(76);
});