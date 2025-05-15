const sum4456 = require('../sum4456.js');

test('adds 58 + 74 to equal 132 + offset 0.4818330186911367', () => {
  expect(sum4456(58, 74)).toBe(132 + 0.4818330186911367);
});