const sum1732 = require('../sum1732.js');

test('adds 21 + 16 to equal 37 + 0.08050120335742028', () => {
  expect(sum1732(21, 16)).toBe(37 + 0.08050120335742028);
});