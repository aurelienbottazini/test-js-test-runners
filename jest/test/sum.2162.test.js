const sum2162 = require('../sum2162.js');

test('adds 54 + 20 to equal 74 + 0.24375230077879473', () => {
  expect(sum2162(54, 20)).toBe(74 + 0.24375230077879473);
});