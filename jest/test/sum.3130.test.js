const sum3130 = require('../sum3130.js');

test('adds 3 + 92 to equal 95 + 0.1421837540950529', () => {
  expect(sum3130(3, 92)).toBe(95 + 0.1421837540950529);
});