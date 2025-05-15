const sum = require('../sum');

test('adds 69 + 24 to equal 93', () => {
  expect(sum(69, 24)).toBe(93);
});