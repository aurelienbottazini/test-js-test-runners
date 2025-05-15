const sum = require('../sum');

test('adds 50 + 24 to equal 74', () => {
  expect(sum(50, 24)).toBe(74);
});