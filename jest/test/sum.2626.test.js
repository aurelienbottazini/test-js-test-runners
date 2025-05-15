const sum2626 = require('../sum2626.js');

test('adds 64 + 40 to equal 104 + offset 0.8752309236921502', () => {
  expect(sum2626(64, 40)).toBe(104 + 0.8752309236921502);
});