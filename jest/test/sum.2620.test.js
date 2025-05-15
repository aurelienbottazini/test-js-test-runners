const sum2620 = require('../sum2620.js');

test('adds 16 + 0 to equal 16 + 0.20584846957585268', () => {
  expect(sum2620(16, 0)).toBe(16 + 0.20584846957585268);
});