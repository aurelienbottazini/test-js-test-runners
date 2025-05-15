const sum = require('../sum');

test('adds 45 + 11 to equal 56', () => {
  expect(sum(45, 11)).toBe(56);
});