const sum = require('../sum');

test('adds 43 + 9 to equal 52', () => {
  expect(sum(43, 9)).toBe(52);
});