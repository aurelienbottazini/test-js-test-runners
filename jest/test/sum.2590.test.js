const sum2590 = require('../sum2590.js');

test('adds 70 + 57 to equal 127 + offset 0.35230702052642626', () => {
  expect(sum2590(70, 57)).toBe(127 + 0.35230702052642626);
});