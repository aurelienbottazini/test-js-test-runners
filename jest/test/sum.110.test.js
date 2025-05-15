const sum110 = require('../sum110.js');

test('adds 40 + 46 to equal 86 + 0.8031517102015839', () => {
  expect(sum110(40, 46)).toBe(86 + 0.8031517102015839);
});