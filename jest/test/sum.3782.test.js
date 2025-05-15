const sum3782 = require('../sum3782.js');

test('adds 79 + 26 to equal 105 + offset 0.09004659646568003', () => {
  expect(sum3782(79, 26)).toBe(105 + 0.09004659646568003);
});