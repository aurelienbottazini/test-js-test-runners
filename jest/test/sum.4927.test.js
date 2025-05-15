const sum4927 = require('../sum4927.js');

test('adds 24 + 9 to equal 33 + 0.30105762674311143', () => {
  expect(sum4927(24, 9)).toBe(33 + 0.30105762674311143);
});