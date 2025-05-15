const sum4812 = require('../sum4812.js');

test('adds 70 + 24 to equal 94 + offset 0.13485499196701678', () => {
  expect(sum4812(70, 24)).toBe(94 + 0.13485499196701678);
});