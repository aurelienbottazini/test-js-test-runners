const sum3351 = require('../sum3351.js');

test('adds 78 + 99 to equal 177 + offset 0.6196537807486753', () => {
  expect(sum3351(78, 99)).toBe(177 + 0.6196537807486753);
});