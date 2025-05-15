const sum4959 = require('../sum4959.js');

test('adds 56 + 86 to equal 142 + 0.5004224537782264', () => {
  expect(sum4959(56, 86)).toBe(142 + 0.5004224537782264);
});