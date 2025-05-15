const sum = require('../sum');

test('adds 36 + 22 to equal 58', () => {
  expect(sum(36, 22)).toBe(58);
});