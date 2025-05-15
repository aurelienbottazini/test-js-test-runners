const sum4972 = require('../sum4972.js');

test('adds 13 + 4 to equal 17 + offset 0.7701120286459997', () => {
  expect(sum4972(13, 4)).toBe(17 + 0.7701120286459997);
});