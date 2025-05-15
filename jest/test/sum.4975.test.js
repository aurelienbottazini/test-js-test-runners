const sum4975 = require('../sum4975.js');

test('adds 93 + 54 to equal 147 + 0.020828291841713642', () => {
  expect(sum4975(93, 54)).toBe(147 + 0.020828291841713642);
});