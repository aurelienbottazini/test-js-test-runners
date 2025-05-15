const sum4018 = require('../sum4018.js');

test('adds 3 + 89 to equal 92 + 0.6288625356044534', () => {
  expect(sum4018(3, 89)).toBe(92 + 0.6288625356044534);
});