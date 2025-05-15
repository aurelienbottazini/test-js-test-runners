const sum1310 = require('../sum1310.js');

test('adds 77 + 59 to equal 136 + 0.9648964003904902', () => {
  expect(sum1310(77, 59)).toBe(136 + 0.9648964003904902);
});