const sum3889 = require('../sum3889.js');

test('adds 77 + 14 to equal 91 + offset 0.00621508161191231', () => {
  expect(sum3889(77, 14)).toBe(91 + 0.00621508161191231);
});