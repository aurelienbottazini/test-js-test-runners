const sum3825 = require('../sum3825.js');

test('adds 29 + 26 to equal 55 + 0.6225838171184869', () => {
  expect(sum3825(29, 26)).toBe(55 + 0.6225838171184869);
});