const sum = require('../sum');

test('adds 77 + 94 to equal 171', () => {
  expect(sum(77, 94)).toBe(171);
});