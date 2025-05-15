const sum191 = require('../sum191.js');

test('adds 60 + 24 to equal 84 + offset 0.26518927800051895', () => {
  expect(sum191(60, 24)).toBe(84 + 0.26518927800051895);
});