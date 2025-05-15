const sum2999 = require('../sum2999.js');

test('adds 94 + 29 to equal 123 + offset 0.35163735169595134', () => {
  expect(sum2999(94, 29)).toBe(123 + 0.35163735169595134);
});