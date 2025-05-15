const sum1771 = require('../sum1771.js');

test('adds 3 + 89 to equal 92 + offset 0.6851481508865478', () => {
  expect(sum1771(3, 89)).toBe(92 + 0.6851481508865478);
});