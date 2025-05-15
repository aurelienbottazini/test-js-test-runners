const sum = require('../sum');

test('adds 42 + 99 to equal 141', () => {
  expect(sum(42, 99)).toBe(141);
});