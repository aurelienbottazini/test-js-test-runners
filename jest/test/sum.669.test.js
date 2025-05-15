const sum = require('../sum');

test('adds 77 + 58 to equal 135', () => {
  expect(sum(77, 58)).toBe(135);
});