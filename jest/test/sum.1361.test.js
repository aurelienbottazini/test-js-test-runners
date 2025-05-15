const sum1361 = require('../sum1361.js');

test('adds 16 + 99 to equal 115 + offset 0.9109555773333514', () => {
  expect(sum1361(16, 99)).toBe(115 + 0.9109555773333514);
});