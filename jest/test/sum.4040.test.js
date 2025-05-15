const sum4040 = require('../sum4040.js');

test('adds 96 + 74 to equal 170 + offset 0.3555412381534582', () => {
  expect(sum4040(96, 74)).toBe(170 + 0.3555412381534582);
});