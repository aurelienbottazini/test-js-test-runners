const sum1340 = require('../sum1340.js');

test('adds 70 + 86 to equal 156 + offset 0.6788567026065079', () => {
  expect(sum1340(70, 86)).toBe(156 + 0.6788567026065079);
});