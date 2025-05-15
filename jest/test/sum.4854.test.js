const sum4854 = require('../sum4854.js');

test('adds 38 + 75 to equal 113 + offset 0.1408771895258114', () => {
  expect(sum4854(38, 75)).toBe(113 + 0.1408771895258114);
});