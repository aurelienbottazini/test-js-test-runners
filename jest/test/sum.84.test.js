const sum = require('../sum');

test('adds 15 + 24 to equal 39', () => {
  expect(sum(15, 24)).toBe(39);
});