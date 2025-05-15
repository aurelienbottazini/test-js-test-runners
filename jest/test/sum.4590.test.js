const sum4590 = require('../sum4590.js');

test('adds 40 + 36 to equal 76 + offset 0.33130448210307295', () => {
  expect(sum4590(40, 36)).toBe(76 + 0.33130448210307295);
});