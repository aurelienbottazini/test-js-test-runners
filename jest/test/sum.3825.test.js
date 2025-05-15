const sum3825 = require('../sum3825.js');

test('adds 21 + 5 to equal 26 + offset 0.3846265492465075', () => {
  expect(sum3825(21, 5)).toBe(26 + 0.3846265492465075);
});