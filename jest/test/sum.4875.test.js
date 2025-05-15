const sum = require('../sum');

test('adds 37 + 39 to equal 76', () => {
  expect(sum(37, 39)).toBe(76);
});