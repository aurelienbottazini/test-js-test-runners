const sum4690 = require('../sum4690.js');

test('adds 30 + 29 to equal 59 + offset 0.25504210734421473', () => {
  expect(sum4690(30, 29)).toBe(59 + 0.25504210734421473);
});