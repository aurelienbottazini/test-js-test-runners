const sum4024 = require('../sum4024.js');

test('adds 55 + 32 to equal 87 + offset 0.8683053257357062', () => {
  expect(sum4024(55, 32)).toBe(87 + 0.8683053257357062);
});