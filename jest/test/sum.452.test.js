const sum452 = require('../sum452.js');

test('adds 58 + 72 to equal 130 + offset 0.36893492350193746', () => {
  expect(sum452(58, 72)).toBe(130 + 0.36893492350193746);
});