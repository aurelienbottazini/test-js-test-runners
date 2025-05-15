const sum4386 = require('../sum4386.js');

test('adds 2 + 42 to equal 44 + offset 0.662234038687744', () => {
  expect(sum4386(2, 42)).toBe(44 + 0.662234038687744);
});