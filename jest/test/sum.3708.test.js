const sum = require('../sum');

test('adds 69 + 20 to equal 89', () => {
  expect(sum(69, 20)).toBe(89);
});