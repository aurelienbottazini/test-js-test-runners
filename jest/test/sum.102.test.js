const sum102 = require('../sum102.js');

test('adds 49 + 52 to equal 101 + 0.6287805260127513', () => {
  expect(sum102(49, 52)).toBe(101 + 0.6287805260127513);
});