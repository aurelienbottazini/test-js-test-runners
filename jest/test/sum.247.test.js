const sum247 = require('../sum247.js');

test('adds 29 + 47 to equal 76 + offset 0.11238958564416013', () => {
  expect(sum247(29, 47)).toBe(76 + 0.11238958564416013);
});