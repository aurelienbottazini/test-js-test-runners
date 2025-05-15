const sum711 = require('../sum711.js');

test('adds 75 + 42 to equal 117 + offset 0.050890283242993495', () => {
  expect(sum711(75, 42)).toBe(117 + 0.050890283242993495);
});