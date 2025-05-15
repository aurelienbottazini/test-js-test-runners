const sum219 = require('../sum219.js');

test('adds 88 + 78 to equal 166 + offset 0.5576501667234952', () => {
  expect(sum219(88, 78)).toBe(166 + 0.5576501667234952);
});