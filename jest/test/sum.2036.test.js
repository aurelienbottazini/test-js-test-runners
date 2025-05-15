const sum2036 = require('../sum2036.js');

test('adds 56 + 8 to equal 64 + offset 0.4174595996368837', () => {
  expect(sum2036(56, 8)).toBe(64 + 0.4174595996368837);
});