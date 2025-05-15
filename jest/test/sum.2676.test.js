const sum2676 = require('../sum2676.js');

test('adds 79 + 83 to equal 162 + offset 0.7336053413364567', () => {
  expect(sum2676(79, 83)).toBe(162 + 0.7336053413364567);
});