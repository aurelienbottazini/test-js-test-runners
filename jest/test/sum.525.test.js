const sum = require('../sum');

test('adds 92 + 91 to equal 183', () => {
  expect(sum(92, 91)).toBe(183);
});