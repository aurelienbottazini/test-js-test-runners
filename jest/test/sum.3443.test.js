const sum3443 = require('../sum3443.js');

test('adds 55 + 24 to equal 79 + offset 0.6400050001528341', () => {
  expect(sum3443(55, 24)).toBe(79 + 0.6400050001528341);
});