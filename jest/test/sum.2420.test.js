const sum2420 = require('../sum2420.js');

test('adds 57 + 40 to equal 97 + offset 0.17640660399365848', () => {
  expect(sum2420(57, 40)).toBe(97 + 0.17640660399365848);
});