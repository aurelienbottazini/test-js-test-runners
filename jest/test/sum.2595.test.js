const sum2595 = require('../sum2595.js');

test('adds 52 + 65 to equal 117 + 0.8440846160723727', () => {
  expect(sum2595(52, 65)).toBe(117 + 0.8440846160723727);
});