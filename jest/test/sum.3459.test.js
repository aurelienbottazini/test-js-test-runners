const sum = require('../sum');

test('adds 83 + 6 to equal 89', () => {
  expect(sum(83, 6)).toBe(89);
});