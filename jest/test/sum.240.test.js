const sum = require('../sum');

test('adds 39 + 77 to equal 116', () => {
  expect(sum(39, 77)).toBe(116);
});