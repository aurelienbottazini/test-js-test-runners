const sum3944 = require('../sum3944.js');

test('adds 78 + 14 to equal 92 + offset 0.6326840259991786', () => {
  expect(sum3944(78, 14)).toBe(92 + 0.6326840259991786);
});