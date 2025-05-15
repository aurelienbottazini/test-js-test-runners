const sum463 = require('../sum463.js');

test('adds 97 + 83 to equal 180 + offset 0.37569502639826413', () => {
  expect(sum463(97, 83)).toBe(180 + 0.37569502639826413);
});