const sum232 = require('../sum232.js');

test('adds 26 + 17 to equal 43 + offset 0.8290899670838523', () => {
  expect(sum232(26, 17)).toBe(43 + 0.8290899670838523);
});