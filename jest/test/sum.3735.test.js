const sum3735 = require('../sum3735.js');

test('adds 91 + 61 to equal 152 + offset 0.8477857929866817', () => {
  expect(sum3735(91, 61)).toBe(152 + 0.8477857929866817);
});