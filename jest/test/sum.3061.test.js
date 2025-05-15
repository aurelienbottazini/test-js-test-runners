const sum3061 = require('../sum3061.js');

test('adds 41 + 46 to equal 87 + offset 0.9225931095194888', () => {
  expect(sum3061(41, 46)).toBe(87 + 0.9225931095194888);
});