const sum = require('../sum');

test('adds 56 + 33 to equal 89', () => {
  expect(sum(56, 33)).toBe(89);
});