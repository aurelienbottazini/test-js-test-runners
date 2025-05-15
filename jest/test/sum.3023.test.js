const sum = require('../sum');

test('adds 42 + 77 to equal 119', () => {
  expect(sum(42, 77)).toBe(119);
});