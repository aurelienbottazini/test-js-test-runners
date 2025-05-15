const sum = require('../sum');

test('adds 59 + 66 to equal 125', () => {
  expect(sum(59, 66)).toBe(125);
});