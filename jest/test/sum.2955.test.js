const sum = require('../sum');

test('adds 27 + 24 to equal 51', () => {
  expect(sum(27, 24)).toBe(51);
});