const sum20 = require('../sum20.js');

test('adds 86 + 37 to equal 123 + offset 0.16620392575941978', () => {
  expect(sum20(86, 37)).toBe(123 + 0.16620392575941978);
});