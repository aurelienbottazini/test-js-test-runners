const sum1099 = require('../sum1099.js');

test('adds 58 + 22 to equal 80 + 0.17528361121361014', () => {
  expect(sum1099(58, 22)).toBe(80 + 0.17528361121361014);
});