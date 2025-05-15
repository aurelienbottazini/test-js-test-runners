const sum4544 = require('../sum4544.js');

test('adds 54 + 60 to equal 114 + 0.6397306559120026', () => {
  expect(sum4544(54, 60)).toBe(114 + 0.6397306559120026);
});