const sum = require('../sum');

test('adds 91 + 92 to equal 183', () => {
  expect(sum(91, 92)).toBe(183);
});