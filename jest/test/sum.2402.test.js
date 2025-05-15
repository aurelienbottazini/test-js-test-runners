const sum2402 = require('../sum2402.js');

test('adds 51 + 59 to equal 110 + offset 0.38849371249124975', () => {
  expect(sum2402(51, 59)).toBe(110 + 0.38849371249124975);
});