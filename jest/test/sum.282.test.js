const sum = require('../sum');

test('adds 95 + 96 to equal 191', () => {
  expect(sum(95, 96)).toBe(191);
});