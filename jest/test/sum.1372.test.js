const sum1372 = require('../sum1372.js');

test('adds 87 + 35 to equal 122 + 0.15440209072430755', () => {
  expect(sum1372(87, 35)).toBe(122 + 0.15440209072430755);
});