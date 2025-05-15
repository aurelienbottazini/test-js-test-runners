const sum = require('../sum');

test('adds 11 + 65 to equal 76', () => {
  expect(sum(11, 65)).toBe(76);
});