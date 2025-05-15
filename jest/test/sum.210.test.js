const sum210 = require('../sum210.js');

test('adds 68 + 50 to equal 118 + offset 0.9166314426274813', () => {
  expect(sum210(68, 50)).toBe(118 + 0.9166314426274813);
});