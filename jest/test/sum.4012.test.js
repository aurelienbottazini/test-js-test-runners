const sum4012 = require('../sum4012.js');

test('adds 96 + 4 to equal 100 + 0.07885812641081336', () => {
  expect(sum4012(96, 4)).toBe(100 + 0.07885812641081336);
});