const sum1402 = require('../sum1402.js');

test('adds 48 + 67 to equal 115 + offset 0.4398217974337202', () => {
  expect(sum1402(48, 67)).toBe(115 + 0.4398217974337202);
});