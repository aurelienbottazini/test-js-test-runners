const sum = require('../sum');

test('adds 65 + 77 to equal 142', () => {
  expect(sum(65, 77)).toBe(142);
});