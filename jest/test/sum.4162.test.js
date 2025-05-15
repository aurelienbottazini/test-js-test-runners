const sum4162 = require('../sum4162.js');

test('adds 91 + 84 to equal 175 + offset 0.04151323010025154', () => {
  expect(sum4162(91, 84)).toBe(175 + 0.04151323010025154);
});