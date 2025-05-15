const sum4034 = require('../sum4034.js');

test('adds 19 + 93 to equal 112 + offset 0.7183878979266128', () => {
  expect(sum4034(19, 93)).toBe(112 + 0.7183878979266128);
});