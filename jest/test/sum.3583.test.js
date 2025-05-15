const sum3583 = require('../sum3583.js');

test('adds 3 + 46 to equal 49 + offset 0.12692563094064335', () => {
  expect(sum3583(3, 46)).toBe(49 + 0.12692563094064335);
});