const sum4136 = require('../sum4136.js');

test('adds 10 + 90 to equal 100 + offset 0.16109190350331137', () => {
  expect(sum4136(10, 90)).toBe(100 + 0.16109190350331137);
});