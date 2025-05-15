const sum2630 = require('../sum2630.js');

test('adds 76 + 90 to equal 166 + offset 0.056404845263984926', () => {
  expect(sum2630(76, 90)).toBe(166 + 0.056404845263984926);
});