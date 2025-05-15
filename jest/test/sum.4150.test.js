const sum4150 = require('../sum4150.js');

test('adds 72 + 52 to equal 124 + offset 0.5192222268376709', () => {
  expect(sum4150(72, 52)).toBe(124 + 0.5192222268376709);
});