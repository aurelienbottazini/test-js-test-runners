const sum4069 = require('../sum4069.js');

test('adds 0 + 29 to equal 29 + 0.0894108265457979', () => {
  expect(sum4069(0, 29)).toBe(29 + 0.0894108265457979);
});