const sum3720 = require('../sum3720.js');

test('adds 70 + 91 to equal 161 + 0.6146486736369821', () => {
  expect(sum3720(70, 91)).toBe(161 + 0.6146486736369821);
});