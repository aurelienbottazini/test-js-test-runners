const sum = require('../sum');

test('adds 85 + 4 to equal 89', () => {
  expect(sum(85, 4)).toBe(89);
});