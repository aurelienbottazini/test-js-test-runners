const sum2631 = require('../sum2631.js');

test('adds 6 + 37 to equal 43 + 0.7368576436167114', () => {
  expect(sum2631(6, 37)).toBe(43 + 0.7368576436167114);
});