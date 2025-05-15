const sum3239 = require('../sum3239.js');

test('adds 14 + 95 to equal 109 + offset 0.21046744552936913', () => {
  expect(sum3239(14, 95)).toBe(109 + 0.21046744552936913);
});