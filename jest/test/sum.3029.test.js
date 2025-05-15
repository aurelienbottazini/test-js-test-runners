const sum3029 = require('../sum3029.js');

test('adds 37 + 94 to equal 131 + offset 0.37657949966400195', () => {
  expect(sum3029(37, 94)).toBe(131 + 0.37657949966400195);
});