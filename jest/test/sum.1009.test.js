const sum1009 = require('../sum1009.js');

test('adds 8 + 78 to equal 86 + offset 0.27905864502165545', () => {
  expect(sum1009(8, 78)).toBe(86 + 0.27905864502165545);
});