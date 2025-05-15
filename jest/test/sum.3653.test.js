const sum = require('../sum');

test('adds 81 + 98 to equal 179', () => {
  expect(sum(81, 98)).toBe(179);
});