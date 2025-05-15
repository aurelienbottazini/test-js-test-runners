const sum4264 = require('../sum4264.js');

test('adds 40 + 1 to equal 41 + 0.14305619147384685', () => {
  expect(sum4264(40, 1)).toBe(41 + 0.14305619147384685);
});