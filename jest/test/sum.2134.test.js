const sum2134 = require('../sum2134.js');

test('adds 12 + 72 to equal 84 + offset 0.6852112075862212', () => {
  expect(sum2134(12, 72)).toBe(84 + 0.6852112075862212);
});