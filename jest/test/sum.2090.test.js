const sum2090 = require('../sum2090.js');

test('adds 0 + 97 to equal 97 + offset 0.4008888760526542', () => {
  expect(sum2090(0, 97)).toBe(97 + 0.4008888760526542);
});