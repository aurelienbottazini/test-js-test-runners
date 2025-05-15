const sum = require('../sum');

test('adds 35 + 92 to equal 127', () => {
  expect(sum(35, 92)).toBe(127);
});