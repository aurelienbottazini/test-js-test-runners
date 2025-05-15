const sum4945 = require('../sum4945.js');

test('adds 67 + 61 to equal 128 + offset 0.9699119079976489', () => {
  expect(sum4945(67, 61)).toBe(128 + 0.9699119079976489);
});