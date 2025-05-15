const sum = require('../sum');

test('adds 27 + 98 to equal 125', () => {
  expect(sum(27, 98)).toBe(125);
});