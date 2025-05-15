const sum4660 = require('../sum4660.js');

test('adds 4 + 10 to equal 14 + offset 0.8904691883101845', () => {
  expect(sum4660(4, 10)).toBe(14 + 0.8904691883101845);
});