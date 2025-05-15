const sum1190 = require('../sum1190.js');

test('adds 62 + 87 to equal 149 + offset 0.7522972229412618', () => {
  expect(sum1190(62, 87)).toBe(149 + 0.7522972229412618);
});