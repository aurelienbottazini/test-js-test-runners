const sum = require('../sum');

test('adds 22 + 67 to equal 89', () => {
  expect(sum(22, 67)).toBe(89);
});