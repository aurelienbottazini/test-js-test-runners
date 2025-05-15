const sum455 = require('../sum455.js');

test('adds 57 + 95 to equal 152 + offset 0.7093549761809672', () => {
  expect(sum455(57, 95)).toBe(152 + 0.7093549761809672);
});