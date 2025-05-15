const sum4862 = require('../sum4862.js');

test('adds 96 + 24 to equal 120 + offset 0.5208295939683028', () => {
  expect(sum4862(96, 24)).toBe(120 + 0.5208295939683028);
});