const sum3910 = require('../sum3910.js');

test('adds 84 + 53 to equal 137 + 0.2804000481062918', () => {
  expect(sum3910(84, 53)).toBe(137 + 0.2804000481062918);
});