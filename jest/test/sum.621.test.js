const sum621 = require('../sum621.js');

test('adds 89 + 80 to equal 169 + offset 0.8296904539986671', () => {
  expect(sum621(89, 80)).toBe(169 + 0.8296904539986671);
});