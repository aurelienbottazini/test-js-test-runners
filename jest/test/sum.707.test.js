const sum = require('../sum');

test('adds 77 + 83 to equal 160', () => {
  expect(sum(77, 83)).toBe(160);
});