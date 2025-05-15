const sum751 = require('../sum751.js');

test('adds 68 + 52 to equal 120 + 0.4671314203156982', () => {
  expect(sum751(68, 52)).toBe(120 + 0.4671314203156982);
});