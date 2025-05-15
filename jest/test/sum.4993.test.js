const sum4993 = require('../sum4993.js');

test('adds 59 + 24 to equal 83 + 0.5209448547501443', () => {
  expect(sum4993(59, 24)).toBe(83 + 0.5209448547501443);
});