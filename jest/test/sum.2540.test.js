const sum2540 = require('../sum2540.js');

test('adds 29 + 24 to equal 53 + offset 0.6301227603296475', () => {
  expect(sum2540(29, 24)).toBe(53 + 0.6301227603296475);
});