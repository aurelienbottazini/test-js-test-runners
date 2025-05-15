const sum = require('../sum');

test('adds 0 + 56 to equal 56', () => {
  expect(sum(0, 56)).toBe(56);
});