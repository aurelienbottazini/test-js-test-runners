const sum2858 = require('../sum2858.js');

test('adds 62 + 44 to equal 106 + offset 0.6185440242600663', () => {
  expect(sum2858(62, 44)).toBe(106 + 0.6185440242600663);
});