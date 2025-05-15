const sum1964 = require('../sum1964.js');

test('adds 50 + 7 to equal 57 + 0.20080752693336035', () => {
  expect(sum1964(50, 7)).toBe(57 + 0.20080752693336035);
});