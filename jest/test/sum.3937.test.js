const sum3937 = require('../sum3937.js');

test('adds 49 + 91 to equal 140 + offset 0.6315518872552761', () => {
  expect(sum3937(49, 91)).toBe(140 + 0.6315518872552761);
});