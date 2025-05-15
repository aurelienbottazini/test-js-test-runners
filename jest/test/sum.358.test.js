const sum = require('../sum');

test('adds 21 + 44 to equal 65', () => {
  expect(sum(21, 44)).toBe(65);
});