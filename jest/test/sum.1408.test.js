const sum = require('../sum');

test('adds 97 + 5 to equal 102', () => {
  expect(sum(97, 5)).toBe(102);
});