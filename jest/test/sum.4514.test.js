const sum = require('../sum');

test('adds 72 + 55 to equal 127', () => {
  expect(sum(72, 55)).toBe(127);
});