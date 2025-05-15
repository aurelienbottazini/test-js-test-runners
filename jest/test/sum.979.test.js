const sum979 = require('../sum979.js');

test('adds 1 + 93 to equal 94 + offset 0.18539974196772913', () => {
  expect(sum979(1, 93)).toBe(94 + 0.18539974196772913);
});