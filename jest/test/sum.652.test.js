const sum = require('../sum');

test('adds 79 + 24 to equal 103', () => {
  expect(sum(79, 24)).toBe(103);
});