const sum4940 = require('../sum4940.js');

test('adds 65 + 4 to equal 69 + offset 0.17098742760078445', () => {
  expect(sum4940(65, 4)).toBe(69 + 0.17098742760078445);
});