const sum1588 = require('../sum1588.js');

test('adds 95 + 65 to equal 160 + offset 0.29282559453133983', () => {
  expect(sum1588(95, 65)).toBe(160 + 0.29282559453133983);
});