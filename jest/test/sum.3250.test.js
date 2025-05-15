const sum = require('../sum');

test('adds 61 + 77 to equal 138', () => {
  expect(sum(61, 77)).toBe(138);
});