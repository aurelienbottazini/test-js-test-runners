const sum1299 = require('../sum1299.js');

test('adds 50 + 78 to equal 128 + 0.6953705522990694', () => {
  expect(sum1299(50, 78)).toBe(128 + 0.6953705522990694);
});