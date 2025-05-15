const sum3970 = require('../sum3970.js');

test('adds 73 + 34 to equal 107 + offset 0.2239796942153699', () => {
  expect(sum3970(73, 34)).toBe(107 + 0.2239796942153699);
});