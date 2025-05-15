const sum2271 = require('../sum2271.js');

test('adds 12 + 23 to equal 35 + offset 0.3971476881111371', () => {
  expect(sum2271(12, 23)).toBe(35 + 0.3971476881111371);
});