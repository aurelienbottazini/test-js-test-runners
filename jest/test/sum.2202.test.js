const sum2202 = require('../sum2202.js');

test('adds 99 + 50 to equal 149 + offset 0.3279657577073065', () => {
  expect(sum2202(99, 50)).toBe(149 + 0.3279657577073065);
});