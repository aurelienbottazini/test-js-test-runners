const sum = require('../sum');

test('adds 58 + 44 to equal 102', () => {
  expect(sum(58, 44)).toBe(102);
});