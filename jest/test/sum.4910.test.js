const sum4910 = require('../sum4910.js');

test('adds 75 + 13 to equal 88 + 0.416387144955792', () => {
  expect(sum4910(75, 13)).toBe(88 + 0.416387144955792);
});