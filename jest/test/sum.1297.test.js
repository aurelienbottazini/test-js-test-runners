const sum1297 = require('../sum1297.js');

test('adds 34 + 37 to equal 71 + 0.3308804496191533', () => {
  expect(sum1297(34, 37)).toBe(71 + 0.3308804496191533);
});