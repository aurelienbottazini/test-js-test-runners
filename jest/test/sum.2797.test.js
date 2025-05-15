const sum = require('../sum');

test('adds 14 + 9 to equal 23', () => {
  expect(sum(14, 9)).toBe(23);
});