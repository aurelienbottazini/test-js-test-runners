const sum3009 = require('../sum3009.js');

test('adds 11 + 20 to equal 31 + offset 0.9109260740276179', () => {
  expect(sum3009(11, 20)).toBe(31 + 0.9109260740276179);
});