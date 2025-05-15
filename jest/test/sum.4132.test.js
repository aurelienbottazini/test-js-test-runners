const sum4132 = require('../sum4132.js');

test('adds 56 + 41 to equal 97 + offset 0.47488672990389424', () => {
  expect(sum4132(56, 41)).toBe(97 + 0.47488672990389424);
});