const sum = require('../sum');

test('adds 75 + 1 to equal 76', () => {
  expect(sum(75, 1)).toBe(76);
});