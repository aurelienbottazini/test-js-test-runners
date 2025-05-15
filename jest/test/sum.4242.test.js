const sum4242 = require('../sum4242.js');

test('adds 66 + 28 to equal 94 + offset 0.9272799554449266', () => {
  expect(sum4242(66, 28)).toBe(94 + 0.9272799554449266);
});