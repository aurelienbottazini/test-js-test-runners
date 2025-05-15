const sum1736 = require('../sum1736.js');

test('adds 66 + 57 to equal 123 + 0.8356031101772614', () => {
  expect(sum1736(66, 57)).toBe(123 + 0.8356031101772614);
});