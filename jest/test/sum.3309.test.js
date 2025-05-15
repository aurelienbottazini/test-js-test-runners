const sum3309 = require('../sum3309.js');

test('adds 24 + 1 to equal 25 + offset 0.047847773588844955', () => {
  expect(sum3309(24, 1)).toBe(25 + 0.047847773588844955);
});