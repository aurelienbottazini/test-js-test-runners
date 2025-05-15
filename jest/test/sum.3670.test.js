const sum3670 = require('../sum3670.js');

test('adds 54 + 54 to equal 108 + 0.2564331596759587', () => {
  expect(sum3670(54, 54)).toBe(108 + 0.2564331596759587);
});