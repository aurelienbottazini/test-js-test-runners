const sum4719 = require('../sum4719.js');

test('adds 12 + 23 to equal 35 + offset 0.9901517488754117', () => {
  expect(sum4719(12, 23)).toBe(35 + 0.9901517488754117);
});