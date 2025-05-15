const sum1341 = require('../sum1341.js');

test('adds 32 + 35 to equal 67 + 0.7850718203530459', () => {
  expect(sum1341(32, 35)).toBe(67 + 0.7850718203530459);
});