const sum = require('../sum');

test('adds 4 + 72 to equal 76', () => {
  expect(sum(4, 72)).toBe(76);
});