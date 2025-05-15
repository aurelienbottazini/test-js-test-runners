const sum4439 = require('../sum4439.js');

test('adds 42 + 85 to equal 127 + offset 0.24207324172854583', () => {
  expect(sum4439(42, 85)).toBe(127 + 0.24207324172854583);
});