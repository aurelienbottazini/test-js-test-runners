const sum = require('../sum');

test('adds 54 + 71 to equal 125', () => {
  expect(sum(54, 71)).toBe(125);
});