const sum = require('../sum');

test('adds 77 + 91 to equal 168', () => {
  expect(sum(77, 91)).toBe(168);
});