const sum732 = require('../sum732.js');

test('adds 42 + 24 to equal 66 + offset 0.4357241680236631', () => {
  expect(sum732(42, 24)).toBe(66 + 0.4357241680236631);
});