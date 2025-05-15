const sum = require('../sum');

test('adds 82 + 43 to equal 125', () => {
  expect(sum(82, 43)).toBe(125);
});