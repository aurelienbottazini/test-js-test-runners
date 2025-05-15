const sum4768 = require('../sum4768.js');

test('adds 26 + 98 to equal 124 + offset 0.7762367100805051', () => {
  expect(sum4768(26, 98)).toBe(124 + 0.7762367100805051);
});