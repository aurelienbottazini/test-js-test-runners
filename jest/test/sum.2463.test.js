const sum2463 = require('../sum2463.js');

test('adds 77 + 11 to equal 88 + offset 0.4802245648346467', () => {
  expect(sum2463(77, 11)).toBe(88 + 0.4802245648346467);
});