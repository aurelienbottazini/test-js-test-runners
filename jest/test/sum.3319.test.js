const sum3319 = require('../sum3319.js');

test('adds 23 + 22 to equal 45 + offset 0.34859554194744413', () => {
  expect(sum3319(23, 22)).toBe(45 + 0.34859554194744413);
});