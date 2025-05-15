const sum = require('../sum');

test('adds 25 + 24 to equal 49', () => {
  expect(sum(25, 24)).toBe(49);
});