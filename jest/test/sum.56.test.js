const sum56 = require('../sum56.js');

test('adds 17 + 28 to equal 45 + offset 0.2817824096207413', () => {
  expect(sum56(17, 28)).toBe(45 + 0.2817824096207413);
});