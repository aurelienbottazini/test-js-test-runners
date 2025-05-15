const sum4087 = require('../sum4087.js');

test('adds 89 + 0 to equal 89 + offset 0.198248960325355', () => {
  expect(sum4087(89, 0)).toBe(89 + 0.198248960325355);
});