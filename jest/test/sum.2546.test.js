const sum2546 = require('../sum2546.js');

test('adds 5 + 55 to equal 60 + offset 0.315646627836079', () => {
  expect(sum2546(5, 55)).toBe(60 + 0.315646627836079);
});