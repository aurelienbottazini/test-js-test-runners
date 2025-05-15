const sum4626 = require('../sum4626.js');

test('adds 27 + 76 to equal 103 + 0.02440923628704883', () => {
  expect(sum4626(27, 76)).toBe(103 + 0.02440923628704883);
});