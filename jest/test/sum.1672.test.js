const sum1672 = require('../sum1672.js');

test('adds 71 + 52 to equal 123 + 0.26219301818800633', () => {
  expect(sum1672(71, 52)).toBe(123 + 0.26219301818800633);
});