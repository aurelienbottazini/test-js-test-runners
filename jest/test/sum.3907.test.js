const sum = require('../sum');

test('adds 89 + 13 to equal 102', () => {
  expect(sum(89, 13)).toBe(102);
});