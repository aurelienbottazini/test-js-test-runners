const sum = require('../sum');

test('adds 28 + 28 to equal 56', () => {
  expect(sum(28, 28)).toBe(56);
});