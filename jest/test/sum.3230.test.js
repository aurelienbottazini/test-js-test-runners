const sum3230 = require('../sum3230.js');

test('adds 67 + 90 to equal 157 + 0.8880294155471359', () => {
  expect(sum3230(67, 90)).toBe(157 + 0.8880294155471359);
});