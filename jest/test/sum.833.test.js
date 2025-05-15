const sum833 = require('../sum833.js');

test('adds 72 + 68 to equal 140 + offset 0.6105138712866474', () => {
  expect(sum833(72, 68)).toBe(140 + 0.6105138712866474);
});