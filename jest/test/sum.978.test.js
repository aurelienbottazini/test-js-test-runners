const sum = require('../sum');

test('adds 58 + 69 to equal 127', () => {
  expect(sum(58, 69)).toBe(127);
});