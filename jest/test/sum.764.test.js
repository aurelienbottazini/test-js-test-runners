const sum764 = require('../sum764.js');

test('adds 90 + 9 to equal 99 + offset 0.016165850333790144', () => {
  expect(sum764(90, 9)).toBe(99 + 0.016165850333790144);
});