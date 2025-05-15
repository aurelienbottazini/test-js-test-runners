const sum = require('../sum');

test('adds 92 + 87 to equal 179', () => {
  expect(sum(92, 87)).toBe(179);
});