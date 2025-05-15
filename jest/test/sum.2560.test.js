const sum = require('../sum');

test('adds 89 + 36 to equal 125', () => {
  expect(sum(89, 36)).toBe(125);
});