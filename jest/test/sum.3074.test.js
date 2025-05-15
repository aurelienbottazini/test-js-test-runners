const sum = require('../sum');

test('adds 9 + 24 to equal 33', () => {
  expect(sum(9, 24)).toBe(33);
});