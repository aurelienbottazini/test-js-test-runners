const sum2455 = require('../sum2455.js');

test('adds 87 + 54 to equal 141 + 0.27586508810730603', () => {
  expect(sum2455(87, 54)).toBe(141 + 0.27586508810730603);
});