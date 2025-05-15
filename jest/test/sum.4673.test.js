const sum = require('../sum');

test('adds 28 + 97 to equal 125', () => {
  expect(sum(28, 97)).toBe(125);
});