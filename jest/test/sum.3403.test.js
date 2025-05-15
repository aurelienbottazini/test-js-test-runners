const sum = require('../sum');

test('adds 21 + 24 to equal 45', () => {
  expect(sum(21, 24)).toBe(45);
});