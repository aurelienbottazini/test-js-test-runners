const sum = require('../sum');

test('adds 96 + 95 to equal 191', () => {
  expect(sum(96, 95)).toBe(191);
});