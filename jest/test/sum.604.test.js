const sum604 = require('../sum604.js');

test('adds 37 + 50 to equal 87 + 0.00300644421061369', () => {
  expect(sum604(37, 50)).toBe(87 + 0.00300644421061369);
});