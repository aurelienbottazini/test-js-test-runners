const sum2252 = require('../sum2252.js');

test('adds 44 + 50 to equal 94 + offset 0.6263395924252714', () => {
  expect(sum2252(44, 50)).toBe(94 + 0.6263395924252714);
});