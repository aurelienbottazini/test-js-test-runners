const sum = require('../sum');

test('adds 70 + 55 to equal 125', () => {
  expect(sum(70, 55)).toBe(125);
});