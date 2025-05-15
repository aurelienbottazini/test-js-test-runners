const sum1987 = require('../sum1987.js');

test('adds 16 + 35 to equal 51 + offset 0.20966425796788002', () => {
  expect(sum1987(16, 35)).toBe(51 + 0.20966425796788002);
});