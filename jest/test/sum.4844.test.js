const sum4844 = require('../sum4844.js');

test('adds 17 + 23 to equal 40 + 0.6156241355383352', () => {
  expect(sum4844(17, 23)).toBe(40 + 0.6156241355383352);
});