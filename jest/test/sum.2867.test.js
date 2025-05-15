const sum = require('../sum');

test('adds 96 + 83 to equal 179', () => {
  expect(sum(96, 83)).toBe(179);
});