const sum = require('../sum');

test('adds 28 + 71 to equal 99', () => {
  expect(sum(28, 71)).toBe(99);
});