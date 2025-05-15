const sum3971 = require('../sum3971.js');

test('adds 7 + 24 to equal 31 + offset 0.22441984186210118', () => {
  expect(sum3971(7, 24)).toBe(31 + 0.22441984186210118);
});