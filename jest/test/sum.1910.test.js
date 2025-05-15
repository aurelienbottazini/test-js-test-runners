const sum1910 = require('../sum1910.js');

test('adds 67 + 87 to equal 154 + 0.033627567662389946', () => {
  expect(sum1910(67, 87)).toBe(154 + 0.033627567662389946);
});