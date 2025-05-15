const sum4610 = require('../sum4610.js');

test('adds 7 + 13 to equal 20 + 0.5104299420763413', () => {
  expect(sum4610(7, 13)).toBe(20 + 0.5104299420763413);
});