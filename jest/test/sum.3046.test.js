const sum = require('../sum');

test('adds 77 + 24 to equal 101', () => {
  expect(sum(77, 24)).toBe(101);
});