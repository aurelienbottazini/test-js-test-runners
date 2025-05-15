const sum = require('../sum');

test('adds 85 + 94 to equal 179', () => {
  expect(sum(85, 94)).toBe(179);
});