const sum3557 = require('../sum3557.js');

test('adds 98 + 77 to equal 175 + offset 0.0034626987783517027', () => {
  expect(sum3557(98, 77)).toBe(175 + 0.0034626987783517027);
});