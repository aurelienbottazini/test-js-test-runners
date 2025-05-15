const sum2143 = require('../sum2143.js');

test('adds 56 + 31 to equal 87 + offset 0.5269445515099261', () => {
  expect(sum2143(56, 31)).toBe(87 + 0.5269445515099261);
});