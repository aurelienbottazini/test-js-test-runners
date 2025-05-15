const sum = require('../sum');

test('adds 3 + 24 to equal 27', () => {
  expect(sum(3, 24)).toBe(27);
});