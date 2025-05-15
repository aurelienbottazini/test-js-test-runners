const sum631 = require('../sum631.js');

test('adds 24 + 58 to equal 82 + 0.33466660814251803', () => {
  expect(sum631(24, 58)).toBe(82 + 0.33466660814251803);
});