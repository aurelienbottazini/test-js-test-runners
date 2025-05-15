const sum876 = require('../sum876.js');

test('adds 48 + 62 to equal 110 + 0.08180163051421807', () => {
  expect(sum876(48, 62)).toBe(110 + 0.08180163051421807);
});