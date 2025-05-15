const sum4857 = require('../sum4857.js');

test('adds 8 + 44 to equal 52 + 0.924885098649743', () => {
  expect(sum4857(8, 44)).toBe(52 + 0.924885098649743);
});