const sum = require('../sum');

test('adds 99 + 42 to equal 141', () => {
  expect(sum(99, 42)).toBe(141);
});