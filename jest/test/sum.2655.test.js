const sum2655 = require('../sum2655.js');

test('adds 8 + 65 to equal 73 + 0.49713501936274196', () => {
  expect(sum2655(8, 65)).toBe(73 + 0.49713501936274196);
});