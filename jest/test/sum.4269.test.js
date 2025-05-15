const sum4269 = require('../sum4269.js');

test('adds 83 + 80 to equal 163 + offset 0.5007150890602274', () => {
  expect(sum4269(83, 80)).toBe(163 + 0.5007150890602274);
});