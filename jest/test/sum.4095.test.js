const sum = require('../sum');

test('adds 8 + 43 to equal 51', () => {
  expect(sum(8, 43)).toBe(51);
});