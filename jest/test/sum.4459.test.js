const sum4459 = require('../sum4459.js');

test('adds 87 + 29 to equal 116 + 0.9934410352436639', () => {
  expect(sum4459(87, 29)).toBe(116 + 0.9934410352436639);
});