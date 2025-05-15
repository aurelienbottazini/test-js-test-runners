const sum4192 = require('../sum4192.js');

test('adds 56 + 88 to equal 144 + 0.3469244435151111', () => {
  expect(sum4192(56, 88)).toBe(144 + 0.3469244435151111);
});