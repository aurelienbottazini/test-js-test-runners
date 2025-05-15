const sum3087 = require('../sum3087.js');

test('adds 58 + 58 to equal 116 + 0.522128525926433', () => {
  expect(sum3087(58, 58)).toBe(116 + 0.522128525926433);
});