const sum1949 = require('../sum1949.js');

test('adds 13 + 27 to equal 40 + 0.6106492257795763', () => {
  expect(sum1949(13, 27)).toBe(40 + 0.6106492257795763);
});