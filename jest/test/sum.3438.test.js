const sum3438 = require('../sum3438.js');

test('adds 25 + 24 to equal 49 + offset 0.7308556756289076', () => {
  expect(sum3438(25, 24)).toBe(49 + 0.7308556756289076);
});