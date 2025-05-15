const sum179 = require('../sum179.js');

test('adds 32 + 92 to equal 124 + offset 0.08228333797324372', () => {
  expect(sum179(32, 92)).toBe(124 + 0.08228333797324372);
});