const sum3361 = require('../sum3361.js');

test('adds 8 + 37 to equal 45 + 0.8996655430818', () => {
  expect(sum3361(8, 37)).toBe(45 + 0.8996655430818);
});