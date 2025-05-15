const sum1133 = require('../sum1133.js');

test('adds 67 + 66 to equal 133 + 0.11026180959794618', () => {
  expect(sum1133(67, 66)).toBe(133 + 0.11026180959794618);
});