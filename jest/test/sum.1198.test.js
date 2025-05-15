const sum1198 = require('../sum1198.js');

test('adds 18 + 15 to equal 33 + 0.550910537765159', () => {
  expect(sum1198(18, 15)).toBe(33 + 0.550910537765159);
});