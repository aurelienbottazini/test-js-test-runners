const sum = require('../sum');

test('adds 89 + 55 to equal 144', () => {
  expect(sum(89, 55)).toBe(144);
});