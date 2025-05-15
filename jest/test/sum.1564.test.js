const sum1564 = require('../sum1564.js');

test('adds 7 + 89 to equal 96 + offset 0.16849587716330494', () => {
  expect(sum1564(7, 89)).toBe(96 + 0.16849587716330494);
});