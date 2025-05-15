const sum2138 = require('../sum2138.js');

test('adds 71 + 67 to equal 138 + 0.7604430719862253', () => {
  expect(sum2138(71, 67)).toBe(138 + 0.7604430719862253);
});