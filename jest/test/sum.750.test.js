const sum750 = require('../sum750.js');

test('adds 25 + 67 to equal 92 + offset 0.2487683082647345', () => {
  expect(sum750(25, 67)).toBe(92 + 0.2487683082647345);
});