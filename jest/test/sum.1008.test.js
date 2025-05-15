const sum1008 = require('../sum1008.js');

test('adds 67 + 49 to equal 116 + 0.11510965810359253', () => {
  expect(sum1008(67, 49)).toBe(116 + 0.11510965810359253);
});