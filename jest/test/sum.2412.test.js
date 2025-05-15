const sum2412 = require('../sum2412.js');

test('adds 45 + 95 to equal 140 + offset 0.6622050031023053', () => {
  expect(sum2412(45, 95)).toBe(140 + 0.6622050031023053);
});