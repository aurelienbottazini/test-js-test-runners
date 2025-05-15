const sum1850 = require('../sum1850.js');

test('adds 37 + 13 to equal 50 + 0.5210423440503401', () => {
  expect(sum1850(37, 13)).toBe(50 + 0.5210423440503401);
});