const sum = require('../sum');

test('adds 33 + 92 to equal 125', () => {
  expect(sum(33, 92)).toBe(125);
});