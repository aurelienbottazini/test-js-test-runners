const sum = require('../sum');

test('adds 2 + 24 to equal 26', () => {
  expect(sum(2, 24)).toBe(26);
});