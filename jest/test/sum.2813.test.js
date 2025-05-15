const sum = require('../sum');

test('adds 47 + 24 to equal 71', () => {
  expect(sum(47, 24)).toBe(71);
});