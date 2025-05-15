const sum4226 = require('../sum4226.js');

test('adds 89 + 28 to equal 117 + 0.7589300196144929', () => {
  expect(sum4226(89, 28)).toBe(117 + 0.7589300196144929);
});