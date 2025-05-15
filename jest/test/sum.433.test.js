const sum = require('../sum');

test('adds 65 + 11 to equal 76', () => {
  expect(sum(65, 11)).toBe(76);
});