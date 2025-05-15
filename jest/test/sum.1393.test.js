const sum1393 = require('../sum1393.js');

test('adds 12 + 32 to equal 44 + 0.9641957901736076', () => {
  expect(sum1393(12, 32)).toBe(44 + 0.9641957901736076);
});