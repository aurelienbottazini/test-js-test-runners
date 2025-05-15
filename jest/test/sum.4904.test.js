const sum4904 = require('../sum4904.js');

test('adds 37 + 51 to equal 88 + offset 0.8850957450199823', () => {
  expect(sum4904(37, 51)).toBe(88 + 0.8850957450199823);
});