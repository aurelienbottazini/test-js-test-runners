const sum = require('../sum');

test('adds 47 + 78 to equal 125', () => {
  expect(sum(47, 78)).toBe(125);
});