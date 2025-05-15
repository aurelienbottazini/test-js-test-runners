const sum3548 = require('../sum3548.js');

test('adds 84 + 16 to equal 100 + offset 0.7016723465390471', () => {
  expect(sum3548(84, 16)).toBe(100 + 0.7016723465390471);
});