const sum3187 = require('../sum3187.js');

test('adds 79 + 67 to equal 146 + 0.029601738468670646', () => {
  expect(sum3187(79, 67)).toBe(146 + 0.029601738468670646);
});