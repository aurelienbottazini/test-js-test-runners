const sum = require('../sum');

test('adds 16 + 36 to equal 52', () => {
  expect(sum(16, 36)).toBe(52);
});