const sum2118 = require('../sum2118.js');

test('adds 11 + 68 to equal 79 + offset 0.9775921447988352', () => {
  expect(sum2118(11, 68)).toBe(79 + 0.9775921447988352);
});