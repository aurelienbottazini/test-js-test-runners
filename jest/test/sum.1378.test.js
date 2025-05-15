const sum1378 = require('../sum1378.js');

test('adds 71 + 66 to equal 137 + offset 0.551305957898364', () => {
  expect(sum1378(71, 66)).toBe(137 + 0.551305957898364);
});