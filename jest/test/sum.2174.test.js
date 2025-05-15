const sum = require('../sum');

test('adds 66 + 23 to equal 89', () => {
  expect(sum(66, 23)).toBe(89);
});