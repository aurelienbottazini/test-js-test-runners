const sum1026 = require('../sum1026.js');

test('adds 12 + 21 to equal 33 + 0.7339667887701742', () => {
  expect(sum1026(12, 21)).toBe(33 + 0.7339667887701742);
});