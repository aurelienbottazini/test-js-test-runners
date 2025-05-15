const sum = require('../sum');

test('adds 80 + 9 to equal 89', () => {
  expect(sum(80, 9)).toBe(89);
});