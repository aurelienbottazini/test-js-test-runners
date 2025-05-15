const sum2560 = require('../sum2560.js');

test('adds 77 + 23 to equal 100 + 0.07779835622069253', () => {
  expect(sum2560(77, 23)).toBe(100 + 0.07779835622069253);
});