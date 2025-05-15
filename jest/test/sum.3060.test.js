const sum3060 = require('../sum3060.js');

test('adds 81 + 91 to equal 172 + offset 0.4893021911420299', () => {
  expect(sum3060(81, 91)).toBe(172 + 0.4893021911420299);
});