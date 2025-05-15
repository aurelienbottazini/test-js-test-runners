const sum = require('../sum');

test('adds 48 + 94 to equal 142', () => {
  expect(sum(48, 94)).toBe(142);
});