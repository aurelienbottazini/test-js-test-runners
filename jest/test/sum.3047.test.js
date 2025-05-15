const sum3047 = require('../sum3047.js');

test('adds 71 + 95 to equal 166 + offset 0.9054736668344079', () => {
  expect(sum3047(71, 95)).toBe(166 + 0.9054736668344079);
});