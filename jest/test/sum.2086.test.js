const sum2086 = require('../sum2086.js');

test('adds 15 + 42 to equal 57 + offset 0.8277148720966179', () => {
  expect(sum2086(15, 42)).toBe(57 + 0.8277148720966179);
});