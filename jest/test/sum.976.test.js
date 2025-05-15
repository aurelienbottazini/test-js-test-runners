const sum = require('../sum');

test('adds 98 + 24 to equal 122', () => {
  expect(sum(98, 24)).toBe(122);
});