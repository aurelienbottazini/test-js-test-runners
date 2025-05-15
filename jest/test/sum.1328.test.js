const sum = require('../sum');

test('adds 29 + 98 to equal 127', () => {
  expect(sum(29, 98)).toBe(127);
});