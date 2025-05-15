const sum846 = require('../sum846.js');

test('adds 10 + 77 to equal 87 + 0.7185713537267747', () => {
  expect(sum846(10, 77)).toBe(87 + 0.7185713537267747);
});