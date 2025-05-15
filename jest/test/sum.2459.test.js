const sum2459 = require('../sum2459.js');

test('adds 17 + 49 to equal 66 + 0.24323468550841898', () => {
  expect(sum2459(17, 49)).toBe(66 + 0.24323468550841898);
});