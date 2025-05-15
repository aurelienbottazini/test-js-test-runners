const sum2535 = require('../sum2535.js');

test('adds 85 + 99 to equal 184 + 0.8548680530528445', () => {
  expect(sum2535(85, 99)).toBe(184 + 0.8548680530528445);
});