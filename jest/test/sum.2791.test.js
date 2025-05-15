const sum2791 = require('../sum2791.js');

test('adds 99 + 67 to equal 166 + offset 0.781230758786542', () => {
  expect(sum2791(99, 67)).toBe(166 + 0.781230758786542);
});