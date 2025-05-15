const sum4244 = require('../sum4244.js');

test('adds 63 + 58 to equal 121 + 0.6997124587885043', () => {
  expect(sum4244(63, 58)).toBe(121 + 0.6997124587885043);
});