const sum1943 = require('../sum1943.js');

test('adds 88 + 92 to equal 180 + offset 0.18398048048279336', () => {
  expect(sum1943(88, 92)).toBe(180 + 0.18398048048279336);
});