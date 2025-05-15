const sum = require('../sum');

test('adds 10 + 92 to equal 102', () => {
  expect(sum(10, 92)).toBe(102);
});