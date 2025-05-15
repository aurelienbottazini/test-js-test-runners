const sum1919 = require('../sum1919.js');

test('adds 92 + 43 to equal 135 + offset 0.39423309559933317', () => {
  expect(sum1919(92, 43)).toBe(135 + 0.39423309559933317);
});