const sum = require('../sum');

test('adds 76 + 0 to equal 76', () => {
  expect(sum(76, 0)).toBe(76);
});