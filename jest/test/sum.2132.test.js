const sum2132 = require('../sum2132.js');

test('adds 67 + 24 to equal 91 + 0.15783306611019865', () => {
  expect(sum2132(67, 24)).toBe(91 + 0.15783306611019865);
});