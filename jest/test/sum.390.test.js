const sum = require('../sum');

test('adds 40 + 24 to equal 64', () => {
  expect(sum(40, 24)).toBe(64);
});