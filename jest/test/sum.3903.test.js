const sum3903 = require('../sum3903.js');

test('adds 14 + 3 to equal 17 + 0.6375635338647061', () => {
  expect(sum3903(14, 3)).toBe(17 + 0.6375635338647061);
});