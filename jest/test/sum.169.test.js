const sum169 = require('../sum169.js');

test('adds 41 + 11 to equal 52 + offset 0.644602874218825', () => {
  expect(sum169(41, 11)).toBe(52 + 0.644602874218825);
});