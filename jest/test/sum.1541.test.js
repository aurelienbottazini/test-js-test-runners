const sum1541 = require('../sum1541.js');

test('adds 72 + 60 to equal 132 + offset 0.6644571471634044', () => {
  expect(sum1541(72, 60)).toBe(132 + 0.6644571471634044);
});