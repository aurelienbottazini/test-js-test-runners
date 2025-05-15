const sum = require('../sum');

test('adds 75 + 50 to equal 125', () => {
  expect(sum(75, 50)).toBe(125);
});