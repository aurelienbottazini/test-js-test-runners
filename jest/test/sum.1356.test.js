const sum1356 = require('../sum1356.js');

test('adds 77 + 77 to equal 154 + offset 0.04118502524959333', () => {
  expect(sum1356(77, 77)).toBe(154 + 0.04118502524959333);
});