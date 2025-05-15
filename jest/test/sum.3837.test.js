const sum3837 = require('../sum3837.js');

test('adds 53 + 90 to equal 143 + offset 0.21197192086301586', () => {
  expect(sum3837(53, 90)).toBe(143 + 0.21197192086301586);
});