const sum3250 = require('../sum3250.js');

test('adds 8 + 73 to equal 81 + 0.3814145099781271', () => {
  expect(sum3250(8, 73)).toBe(81 + 0.3814145099781271);
});