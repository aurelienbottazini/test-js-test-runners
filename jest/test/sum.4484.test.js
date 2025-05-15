const sum4484 = require('../sum4484.js');

test('adds 94 + 66 to equal 160 + 0.9279262673459979', () => {
  expect(sum4484(94, 66)).toBe(160 + 0.9279262673459979);
});