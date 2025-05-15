const sum = require('../sum');

test('adds 86 + 16 to equal 102', () => {
  expect(sum(86, 16)).toBe(102);
});