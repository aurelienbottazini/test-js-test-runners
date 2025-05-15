const sum = require('../sum');

test('adds 31 + 42 to equal 73', () => {
  expect(sum(31, 42)).toBe(73);
});