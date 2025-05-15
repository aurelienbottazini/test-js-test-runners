const sum = require('../sum');

test('adds 35 + 41 to equal 76', () => {
  expect(sum(35, 41)).toBe(76);
});