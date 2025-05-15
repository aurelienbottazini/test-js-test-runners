const sum4447 = require('../sum4447.js');

test('adds 17 + 83 to equal 100 + offset 0.38572056219654505', () => {
  expect(sum4447(17, 83)).toBe(100 + 0.38572056219654505);
});