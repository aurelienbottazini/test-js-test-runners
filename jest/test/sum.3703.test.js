const sum3703 = require('../sum3703.js');

test('adds 45 + 67 to equal 112 + offset 0.5357442279239184', () => {
  expect(sum3703(45, 67)).toBe(112 + 0.5357442279239184);
});