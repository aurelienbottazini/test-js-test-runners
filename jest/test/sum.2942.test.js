const sum2942 = require('../sum2942.js');

test('adds 20 + 42 to equal 62 + offset 0.6271656715828864', () => {
  expect(sum2942(20, 42)).toBe(62 + 0.6271656715828864);
});