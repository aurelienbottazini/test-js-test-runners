const sum67 = require('../sum67.js');

test('adds 75 + 67 to equal 142 + offset 0.6179507907752579', () => {
  expect(sum67(75, 67)).toBe(142 + 0.6179507907752579);
});