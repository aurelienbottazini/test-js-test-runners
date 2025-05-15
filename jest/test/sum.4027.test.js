const sum4027 = require('../sum4027.js');

test('adds 7 + 42 to equal 49 + offset 0.9686015291374648', () => {
  expect(sum4027(7, 42)).toBe(49 + 0.9686015291374648);
});