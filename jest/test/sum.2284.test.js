const sum2284 = require('../sum2284.js');

test('adds 74 + 57 to equal 131 + offset 0.39472499949238815', () => {
  expect(sum2284(74, 57)).toBe(131 + 0.39472499949238815);
});