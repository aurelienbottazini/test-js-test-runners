const sum975 = require('../sum975.js');

test('adds 74 + 51 to equal 125 + 0.5009323037725916', () => {
  expect(sum975(74, 51)).toBe(125 + 0.5009323037725916);
});