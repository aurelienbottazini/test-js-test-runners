const sum576 = require('../sum576.js');

test('adds 98 + 50 to equal 148 + 0.42122090896149833', () => {
  expect(sum576(98, 50)).toBe(148 + 0.42122090896149833);
});