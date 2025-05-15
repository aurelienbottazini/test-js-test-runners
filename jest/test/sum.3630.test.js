const sum3630 = require('../sum3630.js');

test('adds 98 + 26 to equal 124 + offset 0.07202728706842665', () => {
  expect(sum3630(98, 26)).toBe(124 + 0.07202728706842665);
});