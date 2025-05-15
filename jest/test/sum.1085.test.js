const sum1085 = require('../sum1085.js');

test('adds 20 + 16 to equal 36 + offset 0.9085335670281072', () => {
  expect(sum1085(20, 16)).toBe(36 + 0.9085335670281072);
});