const sum = require('../sum');

test('adds 39 + 86 to equal 125', () => {
  expect(sum(39, 86)).toBe(125);
});