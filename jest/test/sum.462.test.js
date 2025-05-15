const sum462 = require('../sum462.js');

test('adds 64 + 56 to equal 120 + 0.09005667414177276', () => {
  expect(sum462(64, 56)).toBe(120 + 0.09005667414177276);
});