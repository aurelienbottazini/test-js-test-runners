const sum1987 = require('../sum1987.js');

test('adds 30 + 88 to equal 118 + 0.18695718230519753', () => {
  expect(sum1987(30, 88)).toBe(118 + 0.18695718230519753);
});