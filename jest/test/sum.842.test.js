const sum842 = require('../sum842.js');

test('adds 82 + 50 to equal 132 + 0.7081796988283483', () => {
  expect(sum842(82, 50)).toBe(132 + 0.7081796988283483);
});