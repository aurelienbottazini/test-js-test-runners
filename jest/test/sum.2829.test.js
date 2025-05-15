const sum = require('../sum');

test('adds 5 + 24 to equal 29', () => {
  expect(sum(5, 24)).toBe(29);
});