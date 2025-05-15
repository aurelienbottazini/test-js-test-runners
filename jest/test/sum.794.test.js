const sum794 = require('../sum794.js');

test('adds 80 + 53 to equal 133 + offset 0.9735988064016974', () => {
  expect(sum794(80, 53)).toBe(133 + 0.9735988064016974);
});