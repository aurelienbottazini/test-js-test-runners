const sum350 = require('../sum350.js');

test('adds 38 + 1 to equal 39 + 0.21976272698193544', () => {
  expect(sum350(38, 1)).toBe(39 + 0.21976272698193544);
});