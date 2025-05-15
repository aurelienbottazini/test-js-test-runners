const sum = require('../sum');

test('adds 87 + 24 to equal 111', () => {
  expect(sum(87, 24)).toBe(111);
});