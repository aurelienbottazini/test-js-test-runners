const sum1801 = require('../sum1801.js');

test('adds 62 + 44 to equal 106 + offset 0.4506194144154444', () => {
  expect(sum1801(62, 44)).toBe(106 + 0.4506194144154444);
});