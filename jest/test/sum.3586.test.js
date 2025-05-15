const sum3586 = require('../sum3586.js');

test('adds 63 + 54 to equal 117 + 0.07730093512190384', () => {
  expect(sum3586(63, 54)).toBe(117 + 0.07730093512190384);
});