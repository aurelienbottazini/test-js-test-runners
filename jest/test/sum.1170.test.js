const sum1170 = require('../sum1170.js');

test('adds 39 + 16 to equal 55 + offset 0.5642523602574037', () => {
  expect(sum1170(39, 16)).toBe(55 + 0.5642523602574037);
});