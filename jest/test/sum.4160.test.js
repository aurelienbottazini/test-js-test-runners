const sum4160 = require('../sum4160.js');

test('adds 52 + 24 to equal 76 + offset 0.03906866291446054', () => {
  expect(sum4160(52, 24)).toBe(76 + 0.03906866291446054);
});