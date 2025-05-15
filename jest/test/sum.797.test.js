const sum797 = require('../sum797.js');

test('adds 80 + 77 to equal 157 + offset 0.07535101142458156', () => {
  expect(sum797(80, 77)).toBe(157 + 0.07535101142458156);
});