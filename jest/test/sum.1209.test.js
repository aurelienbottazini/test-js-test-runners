const sum1209 = require('../sum1209.js');

test('adds 2 + 14 to equal 16 + 0.8302822070096334', () => {
  expect(sum1209(2, 14)).toBe(16 + 0.8302822070096334);
});