const sum330 = require('../sum330.js');

test('adds 88 + 63 to equal 151 + offset 0.8713295012630973', () => {
  expect(sum330(88, 63)).toBe(151 + 0.8713295012630973);
});