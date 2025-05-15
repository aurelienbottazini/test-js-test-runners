const sum2763 = require('../sum2763.js');

test('adds 99 + 26 to equal 125 + offset 0.8692235214610425', () => {
  expect(sum2763(99, 26)).toBe(125 + 0.8692235214610425);
});