const sum876 = require('../sum876.js');

test('adds 66 + 9 to equal 75 + offset 0.5957085072415045', () => {
  expect(sum876(66, 9)).toBe(75 + 0.5957085072415045);
});