const sum2384 = require('../sum2384.js');

test('adds 6 + 58 to equal 64 + offset 0.8850077873679801', () => {
  expect(sum2384(6, 58)).toBe(64 + 0.8850077873679801);
});