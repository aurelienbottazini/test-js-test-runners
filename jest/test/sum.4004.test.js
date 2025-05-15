const sum4004 = require('../sum4004.js');

test('adds 97 + 55 to equal 152 + 0.5141032895829841', () => {
  expect(sum4004(97, 55)).toBe(152 + 0.5141032895829841);
});