const sum3320 = require('../sum3320.js');

test('adds 0 + 60 to equal 60 + offset 0.5678317601708914', () => {
  expect(sum3320(0, 60)).toBe(60 + 0.5678317601708914);
});