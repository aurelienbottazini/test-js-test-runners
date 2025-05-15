const sum = require('../sum');

test('adds 51 + 24 to equal 75', () => {
  expect(sum(51, 24)).toBe(75);
});