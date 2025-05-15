const sum303 = require('../sum303.js');

test('adds 19 + 39 to equal 58 + 0.3169871598606976', () => {
  expect(sum303(19, 39)).toBe(58 + 0.3169871598606976);
});