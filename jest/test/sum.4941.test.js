const sum4941 = require('../sum4941.js');

test('adds 18 + 43 to equal 61 + 0.005433841933820571', () => {
  expect(sum4941(18, 43)).toBe(61 + 0.005433841933820571);
});