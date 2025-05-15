const sum4139 = require('../sum4139.js');

test('adds 26 + 6 to equal 32 + offset 0.5051369463248699', () => {
  expect(sum4139(26, 6)).toBe(32 + 0.5051369463248699);
});