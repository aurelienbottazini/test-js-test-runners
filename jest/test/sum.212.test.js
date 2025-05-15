const sum212 = require('../sum212.js');

test('adds 73 + 85 to equal 158 + 0.5699889614842275', () => {
  expect(sum212(73, 85)).toBe(158 + 0.5699889614842275);
});