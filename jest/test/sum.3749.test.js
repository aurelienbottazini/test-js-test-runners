const sum3749 = require('../sum3749.js');

test('adds 93 + 3 to equal 96 + 0.13567492641400358', () => {
  expect(sum3749(93, 3)).toBe(96 + 0.13567492641400358);
});