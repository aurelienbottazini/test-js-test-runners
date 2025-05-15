const sum3383 = require('../sum3383.js');

test('adds 66 + 56 to equal 122 + 0.6482092883616135', () => {
  expect(sum3383(66, 56)).toBe(122 + 0.6482092883616135);
});