const sum3264 = require('../sum3264.js');

test('adds 82 + 80 to equal 162 + 0.05868924427199773', () => {
  expect(sum3264(82, 80)).toBe(162 + 0.05868924427199773);
});