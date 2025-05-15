const sum3574 = require('../sum3574.js');

test('adds 80 + 17 to equal 97 + offset 0.22613666634575358', () => {
  expect(sum3574(80, 17)).toBe(97 + 0.22613666634575358);
});