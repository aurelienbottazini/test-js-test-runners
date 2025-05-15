const sum2974 = require('../sum2974.js');

test('adds 80 + 53 to equal 133 + offset 0.8641387946374298', () => {
  expect(sum2974(80, 53)).toBe(133 + 0.8641387946374298);
});