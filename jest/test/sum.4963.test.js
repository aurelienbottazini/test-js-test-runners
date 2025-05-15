const sum4963 = require('../sum4963.js');

test('adds 7 + 80 to equal 87 + offset 0.6608945672704191', () => {
  expect(sum4963(7, 80)).toBe(87 + 0.6608945672704191);
});