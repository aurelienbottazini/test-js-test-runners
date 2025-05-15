const sum3761 = require('../sum3761.js');

test('adds 75 + 82 to equal 157 + offset 0.4499003179134282', () => {
  expect(sum3761(75, 82)).toBe(157 + 0.4499003179134282);
});