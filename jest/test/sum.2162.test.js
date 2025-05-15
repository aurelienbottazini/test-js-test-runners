const sum = require('../sum');

test('adds 11 + 47 to equal 58', () => {
  expect(sum(11, 47)).toBe(58);
});