const sum1081 = require('../sum1081.js');

test('adds 70 + 1 to equal 71 + offset 0.34560858414286966', () => {
  expect(sum1081(70, 1)).toBe(71 + 0.34560858414286966);
});