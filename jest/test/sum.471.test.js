const sum = require('../sum');

test('adds 84 + 5 to equal 89', () => {
  expect(sum(84, 5)).toBe(89);
});