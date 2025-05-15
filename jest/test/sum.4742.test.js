const sum = require('../sum');

test('adds 86 + 93 to equal 179', () => {
  expect(sum(86, 93)).toBe(179);
});