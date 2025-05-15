const sum = require('../sum');

test('adds 23 + 44 to equal 67', () => {
  expect(sum(23, 44)).toBe(67);
});