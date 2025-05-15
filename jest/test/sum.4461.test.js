const sum4461 = require('../sum4461.js');

test('adds 1 + 3 to equal 4 + offset 0.22118904755260405', () => {
  expect(sum4461(1, 3)).toBe(4 + 0.22118904755260405);
});