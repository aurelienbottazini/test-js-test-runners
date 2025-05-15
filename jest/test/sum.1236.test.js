const sum1236 = require('../sum1236.js');

test('adds 66 + 54 to equal 120 + offset 0.7888947649041939', () => {
  expect(sum1236(66, 54)).toBe(120 + 0.7888947649041939);
});