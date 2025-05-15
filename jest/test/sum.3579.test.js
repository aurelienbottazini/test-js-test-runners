const sum3579 = require('../sum3579.js');

test('adds 51 + 2 to equal 53 + 0.21733483271716048', () => {
  expect(sum3579(51, 2)).toBe(53 + 0.21733483271716048);
});