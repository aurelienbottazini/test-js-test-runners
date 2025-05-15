const sum3031 = require('../sum3031.js');

test('adds 34 + 55 to equal 89 + 0.06636986422892699', () => {
  expect(sum3031(34, 55)).toBe(89 + 0.06636986422892699);
});