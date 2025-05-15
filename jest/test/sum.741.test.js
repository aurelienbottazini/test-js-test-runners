const sum = require('../sum');

test('adds 54 + 24 to equal 78', () => {
  expect(sum(54, 24)).toBe(78);
});