const sum4273 = require('../sum4273.js');

test('adds 85 + 22 to equal 107 + offset 0.6632832638695212', () => {
  expect(sum4273(85, 22)).toBe(107 + 0.6632832638695212);
});