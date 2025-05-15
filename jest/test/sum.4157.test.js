const sum4157 = require('../sum4157.js');

test('adds 90 + 23 to equal 113 + offset 0.2260031574951682', () => {
  expect(sum4157(90, 23)).toBe(113 + 0.2260031574951682);
});