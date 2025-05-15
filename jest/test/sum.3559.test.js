const sum = require('../sum');

test('adds 34 + 91 to equal 125', () => {
  expect(sum(34, 91)).toBe(125);
});