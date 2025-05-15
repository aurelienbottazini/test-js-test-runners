const sum1368 = require('../sum1368.js');

test('adds 18 + 67 to equal 85 + 0.934487396656642', () => {
  expect(sum1368(18, 67)).toBe(85 + 0.934487396656642);
});