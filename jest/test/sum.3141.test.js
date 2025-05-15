const sum = require('../sum');

test('adds 8 + 44 to equal 52', () => {
  expect(sum(8, 44)).toBe(52);
});