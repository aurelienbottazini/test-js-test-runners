const sum1908 = require('../sum1908.js');

test('adds 57 + 47 to equal 104 + 0.4461019749831422', () => {
  expect(sum1908(57, 47)).toBe(104 + 0.4461019749831422);
});