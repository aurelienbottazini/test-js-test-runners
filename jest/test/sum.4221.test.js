const sum4221 = require('../sum4221.js');

test('adds 34 + 72 to equal 106 + offset 0.2974919897409345', () => {
  expect(sum4221(34, 72)).toBe(106 + 0.2974919897409345);
});