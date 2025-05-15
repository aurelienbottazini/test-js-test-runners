const sum3720 = require('../sum3720.js');

test('adds 32 + 36 to equal 68 + offset 0.850349764459848', () => {
  expect(sum3720(32, 36)).toBe(68 + 0.850349764459848);
});