const sum3676 = require('../sum3676.js');

test('adds 71 + 45 to equal 116 + offset 0.7380101083386079', () => {
  expect(sum3676(71, 45)).toBe(116 + 0.7380101083386079);
});