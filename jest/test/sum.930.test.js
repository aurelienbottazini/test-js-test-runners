const sum930 = require('../sum930.js');

test('adds 23 + 41 to equal 64 + 0.2855831497813264', () => {
  expect(sum930(23, 41)).toBe(64 + 0.2855831497813264);
});