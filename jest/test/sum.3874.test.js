const sum3874 = require('../sum3874.js');

test('adds 26 + 1 to equal 27 + 0.027650746880063082', () => {
  expect(sum3874(26, 1)).toBe(27 + 0.027650746880063082);
});