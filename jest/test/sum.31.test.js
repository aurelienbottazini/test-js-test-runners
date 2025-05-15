const sum31 = require('../sum31.js');

test('adds 20 + 76 to equal 96 + offset 0.7655852086480761', () => {
  expect(sum31(20, 76)).toBe(96 + 0.7655852086480761);
});