const sum1602 = require('../sum1602.js');

test('adds 51 + 70 to equal 121 + 0.35939495848037806', () => {
  expect(sum1602(51, 70)).toBe(121 + 0.35939495848037806);
});