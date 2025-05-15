const sum2307 = require('../sum2307.js');

test('adds 69 + 25 to equal 94 + offset 0.0809756402671703', () => {
  expect(sum2307(69, 25)).toBe(94 + 0.0809756402671703);
});