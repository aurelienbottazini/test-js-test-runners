const sum1374 = require('../sum1374.js');

test('adds 36 + 21 to equal 57 + offset 0.9658448247586491', () => {
  expect(sum1374(36, 21)).toBe(57 + 0.9658448247586491);
});