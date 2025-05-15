const sum2154 = require('../sum2154.js');

test('adds 38 + 4 to equal 42 + 0.355623449823697', () => {
  expect(sum2154(38, 4)).toBe(42 + 0.355623449823697);
});