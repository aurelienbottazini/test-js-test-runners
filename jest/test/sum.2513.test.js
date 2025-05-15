const sum2513 = require('../sum2513.js');

test('adds 2 + 63 to equal 65 + offset 0.5814385655511906', () => {
  expect(sum2513(2, 63)).toBe(65 + 0.5814385655511906);
});