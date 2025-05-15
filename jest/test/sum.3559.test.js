const sum3559 = require('../sum3559.js');

test('adds 49 + 24 to equal 73 + offset 0.014480263947483918', () => {
  expect(sum3559(49, 24)).toBe(73 + 0.014480263947483918);
});