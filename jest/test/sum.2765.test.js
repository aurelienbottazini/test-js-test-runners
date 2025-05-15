const sum2765 = require('../sum2765.js');

test('adds 32 + 70 to equal 102 + offset 0.9591525886224913', () => {
  expect(sum2765(32, 70)).toBe(102 + 0.9591525886224913);
});