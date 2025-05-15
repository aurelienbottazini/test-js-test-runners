const sum = require('../sum');

test('adds 11 + 24 to equal 35', () => {
  expect(sum(11, 24)).toBe(35);
});