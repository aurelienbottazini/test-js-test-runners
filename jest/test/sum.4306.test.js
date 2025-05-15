const sum = require('../sum');

test('adds 34 + 47 to equal 81', () => {
  expect(sum(34, 47)).toBe(81);
});