const sum4245 = require('../sum4245.js');

test('adds 51 + 33 to equal 84 + offset 0.015807416556975817', () => {
  expect(sum4245(51, 33)).toBe(84 + 0.015807416556975817);
});