const sum4051 = require('../sum4051.js');

test('adds 34 + 42 to equal 76 + offset 0.7028763918915993', () => {
  expect(sum4051(34, 42)).toBe(76 + 0.7028763918915993);
});