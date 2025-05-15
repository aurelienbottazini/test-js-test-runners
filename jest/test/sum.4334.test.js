const sum4334 = require('../sum4334.js');

test('adds 20 + 41 to equal 61 + offset 0.5440909641107964', () => {
  expect(sum4334(20, 41)).toBe(61 + 0.5440909641107964);
});