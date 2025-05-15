const sum2469 = require('../sum2469.js');

test('adds 40 + 12 to equal 52 + offset 0.012438235576078482', () => {
  expect(sum2469(40, 12)).toBe(52 + 0.012438235576078482);
});