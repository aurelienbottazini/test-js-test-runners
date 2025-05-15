const sum = require('../sum');

test('adds 57 + 24 to equal 81', () => {
  expect(sum(57, 24)).toBe(81);
});