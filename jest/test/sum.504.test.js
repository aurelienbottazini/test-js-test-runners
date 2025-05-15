const sum504 = require('../sum504.js');

test('adds 9 + 49 to equal 58 + 0.25233199165994913', () => {
  expect(sum504(9, 49)).toBe(58 + 0.25233199165994913);
});