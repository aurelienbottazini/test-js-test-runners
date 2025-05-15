const sum804 = require('../sum804.js');

test('adds 83 + 24 to equal 107 + offset 0.9234100616270217', () => {
  expect(sum804(83, 24)).toBe(107 + 0.9234100616270217);
});