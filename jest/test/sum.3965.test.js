const sum3965 = require('../sum3965.js');

test('adds 76 + 2 to equal 78 + 0.017393202362220528', () => {
  expect(sum3965(76, 2)).toBe(78 + 0.017393202362220528);
});