const sum3310 = require('../sum3310.js');

test('adds 36 + 86 to equal 122 + 0.24280521270379796', () => {
  expect(sum3310(36, 86)).toBe(122 + 0.24280521270379796);
});