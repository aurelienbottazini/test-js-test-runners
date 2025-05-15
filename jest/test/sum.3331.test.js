const sum3331 = require('../sum3331.js');

test('adds 47 + 31 to equal 78 + offset 0.1278561463991148', () => {
  expect(sum3331(47, 31)).toBe(78 + 0.1278561463991148);
});