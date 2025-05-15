const sum3204 = require('../sum3204.js');

test('adds 31 + 27 to equal 58 + 0.612740700802002', () => {
  expect(sum3204(31, 27)).toBe(58 + 0.612740700802002);
});