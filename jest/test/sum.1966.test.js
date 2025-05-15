const sum1966 = require('../sum1966.js');

test('adds 34 + 24 to equal 58 + offset 0.22463171166464568', () => {
  expect(sum1966(34, 24)).toBe(58 + 0.22463171166464568);
});