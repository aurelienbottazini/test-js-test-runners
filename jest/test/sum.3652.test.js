const sum3652 = require('../sum3652.js');

test('adds 39 + 61 to equal 100 + 0.6350305502508703', () => {
  expect(sum3652(39, 61)).toBe(100 + 0.6350305502508703);
});