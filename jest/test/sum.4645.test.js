const sum = require('../sum');

test('adds 41 + 84 to equal 125', () => {
  expect(sum(41, 84)).toBe(125);
});