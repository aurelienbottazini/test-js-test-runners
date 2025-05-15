const sum3827 = require('../sum3827.js');

test('adds 85 + 6 to equal 91 + 0.10959587568202289', () => {
  expect(sum3827(85, 6)).toBe(91 + 0.10959587568202289);
});