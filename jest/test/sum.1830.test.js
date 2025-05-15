const sum = require('../sum');

test('adds 63 + 62 to equal 125', () => {
  expect(sum(63, 62)).toBe(125);
});