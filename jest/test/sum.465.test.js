const sum465 = require('../sum465.js');

test('adds 55 + 37 to equal 92 + offset 0.96503855077898', () => {
  expect(sum465(55, 37)).toBe(92 + 0.96503855077898);
});