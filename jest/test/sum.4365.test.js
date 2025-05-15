const sum4365 = require('../sum4365.js');

test('adds 55 + 74 to equal 129 + offset 0.9810609573676021', () => {
  expect(sum4365(55, 74)).toBe(129 + 0.9810609573676021);
});