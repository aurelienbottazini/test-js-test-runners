const sum2407 = require('../sum2407.js');

test('adds 17 + 24 to equal 41 + 0.5127022945841964', () => {
  expect(sum2407(17, 24)).toBe(41 + 0.5127022945841964);
});