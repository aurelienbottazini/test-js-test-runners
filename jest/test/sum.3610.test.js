const sum3610 = require('../sum3610.js');

test('adds 1 + 67 to equal 68 + 0.27706860678476386', () => {
  expect(sum3610(1, 67)).toBe(68 + 0.27706860678476386);
});