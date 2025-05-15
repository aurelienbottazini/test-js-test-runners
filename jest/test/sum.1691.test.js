const sum = require('../sum');

test('adds 2 + 74 to equal 76', () => {
  expect(sum(2, 74)).toBe(76);
});