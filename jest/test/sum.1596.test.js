const sum = require('../sum');

test('adds 74 + 2 to equal 76', () => {
  expect(sum(74, 2)).toBe(76);
});