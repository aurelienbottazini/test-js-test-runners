const sum420 = require('../sum420.js');

test('adds 16 + 47 to equal 63 + 0.5131772533225747', () => {
  expect(sum420(16, 47)).toBe(63 + 0.5131772533225747);
});