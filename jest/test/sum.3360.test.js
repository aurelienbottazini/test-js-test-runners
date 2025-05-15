const sum3360 = require('../sum3360.js');

test('adds 76 + 65 to equal 141 + 0.439456591164897', () => {
  expect(sum3360(76, 65)).toBe(141 + 0.439456591164897);
});