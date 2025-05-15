const sum4987 = require('../sum4987.js');

test('adds 3 + 50 to equal 53 + 0.008325045687005206', () => {
  expect(sum4987(3, 50)).toBe(53 + 0.008325045687005206);
});