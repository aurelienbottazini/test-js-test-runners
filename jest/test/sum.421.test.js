const sum421 = require('../sum421.js');

test('adds 80 + 10 to equal 90 + offset 0.324394645832063', () => {
  expect(sum421(80, 10)).toBe(90 + 0.324394645832063);
});