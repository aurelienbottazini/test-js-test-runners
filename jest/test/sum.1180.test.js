const sum1180 = require('../sum1180.js');

test('adds 47 + 73 to equal 120 + 0.17765747747133187', () => {
  expect(sum1180(47, 73)).toBe(120 + 0.17765747747133187);
});