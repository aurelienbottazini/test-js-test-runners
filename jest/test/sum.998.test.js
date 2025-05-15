const sum = require('../sum');

test('adds 89 + 61 to equal 150', () => {
  expect(sum(89, 61)).toBe(150);
});