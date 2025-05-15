const sum3310 = require('../sum3310.js');

test('adds 65 + 47 to equal 112 + offset 0.7417338358036224', () => {
  expect(sum3310(65, 47)).toBe(112 + 0.7417338358036224);
});