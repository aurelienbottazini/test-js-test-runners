const sum979 = require('../sum979.js');

test('adds 48 + 70 to equal 118 + 0.5332557263608176', () => {
  expect(sum979(48, 70)).toBe(118 + 0.5332557263608176);
});