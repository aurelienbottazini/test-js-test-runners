const sum1361 = require('../sum1361.js');

test('adds 27 + 68 to equal 95 + 0.43117815535854376', () => {
  expect(sum1361(27, 68)).toBe(95 + 0.43117815535854376);
});