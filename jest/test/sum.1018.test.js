const sum = require('../sum');

test('adds 38 + 24 to equal 62', () => {
  expect(sum(38, 24)).toBe(62);
});