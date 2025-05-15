const sum = require('../sum');

test('adds 21 + 68 to equal 89', () => {
  expect(sum(21, 68)).toBe(89);
});