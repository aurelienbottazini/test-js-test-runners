const sum2872 = require('../sum2872.js');

test('adds 96 + 4 to equal 100 + offset 0.6624887379364821', () => {
  expect(sum2872(96, 4)).toBe(100 + 0.6624887379364821);
});