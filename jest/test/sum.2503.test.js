const sum2503 = require('../sum2503.js');

test('adds 13 + 62 to equal 75 + 0.7394706017041928', () => {
  expect(sum2503(13, 62)).toBe(75 + 0.7394706017041928);
});