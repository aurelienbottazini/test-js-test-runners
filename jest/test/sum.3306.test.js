const sum3306 = require('../sum3306.js');

test('adds 63 + 27 to equal 90 + offset 0.28084429198893046', () => {
  expect(sum3306(63, 27)).toBe(90 + 0.28084429198893046);
});