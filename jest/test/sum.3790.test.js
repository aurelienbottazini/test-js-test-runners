const sum = require('../sum');

test('adds 66 + 24 to equal 90', () => {
  expect(sum(66, 24)).toBe(90);
});