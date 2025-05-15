const sum1386 = require('../sum1386.js');

test('adds 45 + 63 to equal 108 + 0.9140482922760043', () => {
  expect(sum1386(45, 63)).toBe(108 + 0.9140482922760043);
});