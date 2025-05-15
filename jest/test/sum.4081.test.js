const sum4081 = require('../sum4081.js');

test('adds 63 + 95 to equal 158 + 0.09383848912456194', () => {
  expect(sum4081(63, 95)).toBe(158 + 0.09383848912456194);
});