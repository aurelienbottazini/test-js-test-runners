const sum1794 = require('../sum1794.js');

test('adds 66 + 62 to equal 128 + offset 0.2759778860639367', () => {
  expect(sum1794(66, 62)).toBe(128 + 0.2759778860639367);
});