const sum236 = require('../sum236.js');

test('adds 79 + 82 to equal 161 + offset 0.8817369906681988', () => {
  expect(sum236(79, 82)).toBe(161 + 0.8817369906681988);
});