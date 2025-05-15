const sum = require('../sum');

test('adds 49 + 24 to equal 73', () => {
  expect(sum(49, 24)).toBe(73);
});