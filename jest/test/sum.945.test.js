const sum945 = require('../sum945.js');

test('adds 53 + 42 to equal 95 + 0.11645495573156261', () => {
  expect(sum945(53, 42)).toBe(95 + 0.11645495573156261);
});