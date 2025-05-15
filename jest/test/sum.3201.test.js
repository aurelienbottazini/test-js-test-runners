const sum3201 = require('../sum3201.js');

test('adds 51 + 16 to equal 67 + offset 0.007165510944423081', () => {
  expect(sum3201(51, 16)).toBe(67 + 0.007165510944423081);
});