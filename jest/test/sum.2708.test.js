const sum2708 = require('../sum2708.js');

test('adds 53 + 24 to equal 77 + 0.1589276342838567', () => {
  expect(sum2708(53, 24)).toBe(77 + 0.1589276342838567);
});