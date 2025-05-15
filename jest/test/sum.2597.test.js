const sum = require('../sum');

test('adds 55 + 70 to equal 125', () => {
  expect(sum(55, 70)).toBe(125);
});