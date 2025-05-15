const sum4752 = require('../sum4752.js');

test('adds 67 + 7 to equal 74 + offset 0.6454212797841798', () => {
  expect(sum4752(67, 7)).toBe(74 + 0.6454212797841798);
});