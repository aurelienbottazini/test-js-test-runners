const sum = require('../sum');

test('adds 69 + 56 to equal 125', () => {
  expect(sum(69, 56)).toBe(125);
});