const sum4401 = require('../sum4401.js');

test('adds 14 + 3 to equal 17 + offset 0.15699196070553156', () => {
  expect(sum4401(14, 3)).toBe(17 + 0.15699196070553156);
});