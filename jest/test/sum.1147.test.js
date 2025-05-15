const sum1147 = require('../sum1147.js');

test('adds 98 + 14 to equal 112 + offset 0.10124191956750184', () => {
  expect(sum1147(98, 14)).toBe(112 + 0.10124191956750184);
});