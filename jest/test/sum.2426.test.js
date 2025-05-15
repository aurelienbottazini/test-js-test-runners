const sum2426 = require('../sum2426.js');

test('adds 16 + 18 to equal 34 + offset 0.6453505321927158', () => {
  expect(sum2426(16, 18)).toBe(34 + 0.6453505321927158);
});