const sum96 = require('../sum96.js');

test('adds 62 + 1 to equal 63 + offset 0.8697371794576879', () => {
  expect(sum96(62, 1)).toBe(63 + 0.8697371794576879);
});