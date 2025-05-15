const sum3107 = require('../sum3107.js');

test('adds 21 + 49 to equal 70 + offset 0.26745403399446754', () => {
  expect(sum3107(21, 49)).toBe(70 + 0.26745403399446754);
});