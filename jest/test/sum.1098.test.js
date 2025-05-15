const sum = require('../sum');

test('adds 89 + 38 to equal 127', () => {
  expect(sum(89, 38)).toBe(127);
});