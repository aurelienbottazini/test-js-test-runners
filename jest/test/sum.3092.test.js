const sum = require('../sum');

test('adds 13 + 92 to equal 105', () => {
  expect(sum(13, 92)).toBe(105);
});