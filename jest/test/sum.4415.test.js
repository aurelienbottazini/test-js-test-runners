const sum4415 = require('../sum4415.js');

test('adds 35 + 5 to equal 40 + 0.698169814432926', () => {
  expect(sum4415(35, 5)).toBe(40 + 0.698169814432926);
});