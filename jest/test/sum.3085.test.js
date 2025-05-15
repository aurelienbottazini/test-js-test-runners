const sum3085 = require('../sum3085.js');

test('adds 54 + 9 to equal 63 + offset 0.7042347350283024', () => {
  expect(sum3085(54, 9)).toBe(63 + 0.7042347350283024);
});