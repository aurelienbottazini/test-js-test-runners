const sum3945 = require('../sum3945.js');

test('adds 45 + 77 to equal 122 + 0.9736842263981207', () => {
  expect(sum3945(45, 77)).toBe(122 + 0.9736842263981207);
});