const sum723 = require('../sum723.js');

test('adds 39 + 32 to equal 71 + offset 0.3940910490029059', () => {
  expect(sum723(39, 32)).toBe(71 + 0.3940910490029059);
});