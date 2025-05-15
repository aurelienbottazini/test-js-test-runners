const sum4293 = require('../sum4293.js');

test('adds 16 + 38 to equal 54 + 0.945125189937115', () => {
  expect(sum4293(16, 38)).toBe(54 + 0.945125189937115);
});