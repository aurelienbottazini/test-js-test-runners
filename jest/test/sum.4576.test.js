const sum = require('../sum');

test('adds 95 + 7 to equal 102', () => {
  expect(sum(95, 7)).toBe(102);
});