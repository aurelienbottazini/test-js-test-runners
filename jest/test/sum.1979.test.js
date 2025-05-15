const sum1979 = require('../sum1979.js');

test('adds 93 + 22 to equal 115 + 0.7592920171606071', () => {
  expect(sum1979(93, 22)).toBe(115 + 0.7592920171606071);
});