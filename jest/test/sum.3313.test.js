const sum = require('../sum');

test('adds 25 + 51 to equal 76', () => {
  expect(sum(25, 51)).toBe(76);
});