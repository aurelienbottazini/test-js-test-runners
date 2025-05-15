const sum = require('../sum');

test('adds 6 + 70 to equal 76', () => {
  expect(sum(6, 70)).toBe(76);
});