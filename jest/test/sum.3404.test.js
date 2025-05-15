const sum3404 = require('../sum3404.js');

test('adds 32 + 12 to equal 44 + offset 0.37726427082333325', () => {
  expect(sum3404(32, 12)).toBe(44 + 0.37726427082333325);
});