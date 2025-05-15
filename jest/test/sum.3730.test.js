const sum3730 = require('../sum3730.js');

test('adds 46 + 87 to equal 133 + 0.5844230716306593', () => {
  expect(sum3730(46, 87)).toBe(133 + 0.5844230716306593);
});