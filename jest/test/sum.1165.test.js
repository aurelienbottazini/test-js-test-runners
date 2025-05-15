const sum1165 = require('../sum1165.js');

test('adds 87 + 34 to equal 121 + 0.4212659466952252', () => {
  expect(sum1165(87, 34)).toBe(121 + 0.4212659466952252);
});