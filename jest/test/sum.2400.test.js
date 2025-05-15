const sum2400 = require('../sum2400.js');

test('adds 78 + 46 to equal 124 + offset 0.46523485021082556', () => {
  expect(sum2400(78, 46)).toBe(124 + 0.46523485021082556);
});