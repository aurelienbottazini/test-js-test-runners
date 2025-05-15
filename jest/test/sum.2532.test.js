const sum = require('../sum');

test('adds 41 + 48 to equal 89', () => {
  expect(sum(41, 48)).toBe(89);
});