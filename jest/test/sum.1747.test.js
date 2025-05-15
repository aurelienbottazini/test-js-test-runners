const sum = require('../sum');

test('adds 35 + 24 to equal 59', () => {
  expect(sum(35, 24)).toBe(59);
});