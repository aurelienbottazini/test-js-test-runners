const sum3506 = require('../sum3506.js');

test('adds 49 + 44 to equal 93 + 0.6786104008877979', () => {
  expect(sum3506(49, 44)).toBe(93 + 0.6786104008877979);
});