const sum857 = require('../sum857.js');

test('adds 59 + 33 to equal 92 + offset 0.04742667239370635', () => {
  expect(sum857(59, 33)).toBe(92 + 0.04742667239370635);
});