const sum3734 = require('../sum3734.js');

test('adds 9 + 6 to equal 15 + 0.905978665469986', () => {
  expect(sum3734(9, 6)).toBe(15 + 0.905978665469986);
});