const sum = require('../sum');

test('adds 88 + 91 to equal 179', () => {
  expect(sum(88, 91)).toBe(179);
});