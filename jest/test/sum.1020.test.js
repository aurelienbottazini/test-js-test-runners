const sum1020 = require('../sum1020.js');

test('adds 37 + 77 to equal 114 + 0.5560015548262214', () => {
  expect(sum1020(37, 77)).toBe(114 + 0.5560015548262214);
});