const sum776 = require('../sum776.js');

test('adds 66 + 1 to equal 67 + 0.35329520052080843', () => {
  expect(sum776(66, 1)).toBe(67 + 0.35329520052080843);
});