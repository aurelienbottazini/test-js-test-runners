const sum3880 = require('../sum3880.js');

test('adds 26 + 19 to equal 45 + 0.4992225214641831', () => {
  expect(sum3880(26, 19)).toBe(45 + 0.4992225214641831);
});