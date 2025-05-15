const sum3656 = require('../sum3656.js');

test('adds 62 + 47 to equal 109 + offset 0.6362184604128722', () => {
  expect(sum3656(62, 47)).toBe(109 + 0.6362184604128722);
});