const sum4462 = require('../sum4462.js');

test('adds 80 + 33 to equal 113 + offset 0.30831466087470094', () => {
  expect(sum4462(80, 33)).toBe(113 + 0.30831466087470094);
});