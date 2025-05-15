const sum2766 = require('../sum2766.js');

test('adds 44 + 81 to equal 125 + offset 0.518923776472239', () => {
  expect(sum2766(44, 81)).toBe(125 + 0.518923776472239);
});