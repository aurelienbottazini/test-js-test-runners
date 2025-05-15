const sum4137 = require('../sum4137.js');

test('adds 71 + 1 to equal 72 + offset 0.002310598952350862', () => {
  expect(sum4137(71, 1)).toBe(72 + 0.002310598952350862);
});