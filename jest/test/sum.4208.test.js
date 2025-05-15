const sum4208 = require('../sum4208.js');

test('adds 71 + 38 to equal 109 + offset 0.016750551887395715', () => {
  expect(sum4208(71, 38)).toBe(109 + 0.016750551887395715);
});