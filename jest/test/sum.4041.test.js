const sum4041 = require('../sum4041.js');

test('adds 85 + 65 to equal 150 + 0.967390362623282', () => {
  expect(sum4041(85, 65)).toBe(150 + 0.967390362623282);
});