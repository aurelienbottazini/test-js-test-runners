const sum = require('../sum');

test('adds 24 + 65 to equal 89', () => {
  expect(sum(24, 65)).toBe(89);
});