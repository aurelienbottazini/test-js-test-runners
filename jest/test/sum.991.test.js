const sum991 = require('../sum991.js');

test('adds 71 + 62 to equal 133 + offset 0.218661560726792', () => {
  expect(sum991(71, 62)).toBe(133 + 0.218661560726792);
});