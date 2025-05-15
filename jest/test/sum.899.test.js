const sum899 = require('../sum899.js');

test('adds 83 + 0 to equal 83 + 0.11350533804653662', () => {
  expect(sum899(83, 0)).toBe(83 + 0.11350533804653662);
});