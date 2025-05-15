const sum4075 = require('../sum4075.js');

test('adds 71 + 7 to equal 78 + offset 0.6127057365109443', () => {
  expect(sum4075(71, 7)).toBe(78 + 0.6127057365109443);
});