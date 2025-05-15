const sum1092 = require('../sum1092.js');

test('adds 3 + 28 to equal 31 + offset 0.3740276238055601', () => {
  expect(sum1092(3, 28)).toBe(31 + 0.3740276238055601);
});