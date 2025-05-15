const sum3168 = require('../sum3168.js');

test('adds 80 + 42 to equal 122 + 0.3366372540270949', () => {
  expect(sum3168(80, 42)).toBe(122 + 0.3366372540270949);
});