const sum = require('../sum');

test('adds 19 + 24 to equal 43', () => {
  expect(sum(19, 24)).toBe(43);
});