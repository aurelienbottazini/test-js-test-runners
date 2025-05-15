const sum3282 = require('../sum3282.js');

test('adds 43 + 53 to equal 96 + offset 0.5409898073389242', () => {
  expect(sum3282(43, 53)).toBe(96 + 0.5409898073389242);
});