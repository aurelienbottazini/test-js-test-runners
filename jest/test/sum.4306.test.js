const sum4306 = require('../sum4306.js');

test('adds 63 + 88 to equal 151 + offset 0.0520341766260457', () => {
  expect(sum4306(63, 88)).toBe(151 + 0.0520341766260457);
});