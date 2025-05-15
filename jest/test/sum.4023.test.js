const sum4023 = require('../sum4023.js');

test('adds 61 + 79 to equal 140 + offset 0.041547222117778504', () => {
  expect(sum4023(61, 79)).toBe(140 + 0.041547222117778504);
});