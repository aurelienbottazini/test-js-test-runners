const sum2956 = require('../sum2956.js');

test('adds 69 + 73 to equal 142 + offset 0.07640196029197588', () => {
  expect(sum2956(69, 73)).toBe(142 + 0.07640196029197588);
});