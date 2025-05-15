const sum3688 = require('../sum3688.js');

test('adds 0 + 25 to equal 25 + offset 0.7284146523722466', () => {
  expect(sum3688(0, 25)).toBe(25 + 0.7284146523722466);
});