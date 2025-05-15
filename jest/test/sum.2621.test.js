const sum = require('../sum');

test('adds 77 + 50 to equal 127', () => {
  expect(sum(77, 50)).toBe(127);
});