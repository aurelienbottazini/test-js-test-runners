const sum597 = require('../sum597.js');

test('adds 82 + 14 to equal 96 + offset 0.8922780866443578', () => {
  expect(sum597(82, 14)).toBe(96 + 0.8922780866443578);
});