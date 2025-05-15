const sum1108 = require('../sum1108.js');

test('adds 46 + 41 to equal 87 + offset 0.41840868631529293', () => {
  expect(sum1108(46, 41)).toBe(87 + 0.41840868631529293);
});