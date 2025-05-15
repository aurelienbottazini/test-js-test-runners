const sum4116 = require('../sum4116.js');

test('adds 53 + 78 to equal 131 + 0.7304326270223317', () => {
  expect(sum4116(53, 78)).toBe(131 + 0.7304326270223317);
});