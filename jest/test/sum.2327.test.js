const sum2327 = require('../sum2327.js');

test('adds 41 + 11 to equal 52 + offset 0.8198071301676837', () => {
  expect(sum2327(41, 11)).toBe(52 + 0.8198071301676837);
});