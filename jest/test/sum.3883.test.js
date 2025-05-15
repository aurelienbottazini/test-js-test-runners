const sum3883 = require('../sum3883.js');

test('adds 77 + 91 to equal 168 + 0.0467161123518699', () => {
  expect(sum3883(77, 91)).toBe(168 + 0.0467161123518699);
});