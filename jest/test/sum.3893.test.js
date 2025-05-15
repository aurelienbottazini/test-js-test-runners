const sum3893 = require('../sum3893.js');

test('adds 31 + 22 to equal 53 + offset 0.9501070406678032', () => {
  expect(sum3893(31, 22)).toBe(53 + 0.9501070406678032);
});