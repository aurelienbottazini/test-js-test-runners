const sum630 = require('../sum630.js');

test('adds 29 + 6 to equal 35 + offset 0.39970508101386637', () => {
  expect(sum630(29, 6)).toBe(35 + 0.39970508101386637);
});