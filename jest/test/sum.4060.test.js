const sum4060 = require('../sum4060.js');

test('adds 91 + 80 to equal 171 + 0.19856036655922327', () => {
  expect(sum4060(91, 80)).toBe(171 + 0.19856036655922327);
});