const sum2668 = require('../sum2668.js');

test('adds 3 + 39 to equal 42 + offset 0.2172607605992355', () => {
  expect(sum2668(3, 39)).toBe(42 + 0.2172607605992355);
});