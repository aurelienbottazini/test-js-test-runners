const sum4377 = require('../sum4377.js');

test('adds 33 + 27 to equal 60 + 0.8861044576635756', () => {
  expect(sum4377(33, 27)).toBe(60 + 0.8861044576635756);
});