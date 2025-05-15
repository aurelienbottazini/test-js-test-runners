const sum976 = require('../sum976.js');

test('adds 40 + 64 to equal 104 + 0.10367153251001293', () => {
  expect(sum976(40, 64)).toBe(104 + 0.10367153251001293);
});