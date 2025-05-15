const sum4001 = require('../sum4001.js');

test('adds 66 + 28 to equal 94 + 0.344785418375408', () => {
  expect(sum4001(66, 28)).toBe(94 + 0.344785418375408);
});