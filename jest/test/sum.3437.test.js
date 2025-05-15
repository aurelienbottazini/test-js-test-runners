const sum3437 = require('../sum3437.js');

test('adds 68 + 26 to equal 94 + offset 0.66605320601091', () => {
  expect(sum3437(68, 26)).toBe(94 + 0.66605320601091);
});