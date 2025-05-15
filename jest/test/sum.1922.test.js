const sum = require('../sum');

test('adds 56 + 94 to equal 150', () => {
  expect(sum(56, 94)).toBe(150);
});