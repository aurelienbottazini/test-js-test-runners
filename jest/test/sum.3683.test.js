const sum3683 = require('../sum3683.js');

test('adds 81 + 47 to equal 128 + offset 0.054414945029814255', () => {
  expect(sum3683(81, 47)).toBe(128 + 0.054414945029814255);
});