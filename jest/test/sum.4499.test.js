const sum4499 = require('../sum4499.js');

test('adds 91 + 74 to equal 165 + offset 0.6905360107278907', () => {
  expect(sum4499(91, 74)).toBe(165 + 0.6905360107278907);
});