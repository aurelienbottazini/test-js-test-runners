const sum4366 = require('../sum4366.js');

test('adds 93 + 42 to equal 135 + offset 0.47392521932039033', () => {
  expect(sum4366(93, 42)).toBe(135 + 0.47392521932039033);
});