const sum4307 = require('../sum4307.js');

test('adds 7 + 41 to equal 48 + 0.6503376796357379', () => {
  expect(sum4307(7, 41)).toBe(48 + 0.6503376796357379);
});