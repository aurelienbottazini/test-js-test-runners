const sum3594 = require('../sum3594.js');

test('adds 70 + 97 to equal 167 + offset 0.888216218966641', () => {
  expect(sum3594(70, 97)).toBe(167 + 0.888216218966641);
});