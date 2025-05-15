const sum4297 = require('../sum4297.js');

test('adds 66 + 53 to equal 119 + offset 0.22646118333373966', () => {
  expect(sum4297(66, 53)).toBe(119 + 0.22646118333373966);
});