const sum319 = require('../sum319.js');

test('adds 70 + 67 to equal 137 + 0.9776055680899436', () => {
  expect(sum319(70, 67)).toBe(137 + 0.9776055680899436);
});