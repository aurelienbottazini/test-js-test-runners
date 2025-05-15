const sum4281 = require('../sum4281.js');

test('adds 99 + 21 to equal 120 + offset 0.23158561573294179', () => {
  expect(sum4281(99, 21)).toBe(120 + 0.23158561573294179);
});