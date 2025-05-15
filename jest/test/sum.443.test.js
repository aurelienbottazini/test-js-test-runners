const sum = require('../sum');

test('adds 25 + 77 to equal 102', () => {
  expect(sum(25, 77)).toBe(102);
});