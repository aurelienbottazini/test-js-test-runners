const sum1303 = require('../sum1303.js');

test('adds 30 + 29 to equal 59 + offset 0.2308080469040572', () => {
  expect(sum1303(30, 29)).toBe(59 + 0.2308080469040572);
});