const sum = require('../sum');

test('adds 91 + 77 to equal 168', () => {
  expect(sum(91, 77)).toBe(168);
});