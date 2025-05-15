const sum714 = require('../sum714.js');

test('adds 51 + 24 to equal 75 + 0.8089676449023473', () => {
  expect(sum714(51, 24)).toBe(75 + 0.8089676449023473);
});