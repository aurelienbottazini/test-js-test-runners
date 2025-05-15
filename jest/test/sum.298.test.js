const sum298 = require('../sum298.js');

test('adds 82 + 3 to equal 85 + offset 0.8745546864503014', () => {
  expect(sum298(82, 3)).toBe(85 + 0.8745546864503014);
});