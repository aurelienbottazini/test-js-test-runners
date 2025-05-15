const sum = require('../sum');

test('adds 15 + 36 to equal 51', () => {
  expect(sum(15, 36)).toBe(51);
});