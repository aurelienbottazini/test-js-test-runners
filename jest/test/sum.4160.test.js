const sum4160 = require('../sum4160.js');

test('adds 51 + 26 to equal 77 + 0.4469155903024954', () => {
  expect(sum4160(51, 26)).toBe(77 + 0.4469155903024954);
});