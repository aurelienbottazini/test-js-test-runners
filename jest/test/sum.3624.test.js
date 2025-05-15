const sum3624 = require('../sum3624.js');

test('adds 67 + 82 to equal 149 + 0.8731897627199734', () => {
  expect(sum3624(67, 82)).toBe(149 + 0.8731897627199734);
});