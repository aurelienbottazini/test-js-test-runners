const sum3502 = require('../sum3502.js');

test('adds 31 + 68 to equal 99 + 0.7115818670634452', () => {
  expect(sum3502(31, 68)).toBe(99 + 0.7115818670634452);
});