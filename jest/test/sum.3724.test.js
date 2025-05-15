const sum = require('../sum');

test('adds 91 + 88 to equal 179', () => {
  expect(sum(91, 88)).toBe(179);
});