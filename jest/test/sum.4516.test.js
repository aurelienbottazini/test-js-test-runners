const sum4516 = require('../sum4516.js');

test('adds 24 + 92 to equal 116 + 0.8998610020091359', () => {
  expect(sum4516(24, 92)).toBe(116 + 0.8998610020091359);
});