const sum = require('../sum');

test('adds 30 + 24 to equal 54', () => {
  expect(sum(30, 24)).toBe(54);
});