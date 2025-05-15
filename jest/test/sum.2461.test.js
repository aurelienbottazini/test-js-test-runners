const sum2461 = require('../sum2461.js');

test('adds 38 + 78 to equal 116 + offset 0.3945071471550733', () => {
  expect(sum2461(38, 78)).toBe(116 + 0.3945071471550733);
});