const sum287 = require('../sum287.js');

test('adds 21 + 62 to equal 83 + 0.7214247072872895', () => {
  expect(sum287(21, 62)).toBe(83 + 0.7214247072872895);
});