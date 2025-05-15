const sum3158 = require('../sum3158.js');

test('adds 45 + 87 to equal 132 + 0.5512007590574565', () => {
  expect(sum3158(45, 87)).toBe(132 + 0.5512007590574565);
});