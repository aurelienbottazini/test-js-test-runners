const sum = require('../sum');

test('adds 14 + 77 to equal 91', () => {
  expect(sum(14, 77)).toBe(91);
});