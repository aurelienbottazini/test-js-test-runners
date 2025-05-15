const sum705 = require('../sum705.js');

test('adds 43 + 74 to equal 117 + offset 0.32236642988419617', () => {
  expect(sum705(43, 74)).toBe(117 + 0.32236642988419617);
});